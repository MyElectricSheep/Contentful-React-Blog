import React, { useState, useEffect } from "react";
import client from "./client";
import { Link } from "react-router-dom";
import { useParams, useHistory } from "react-router-dom";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";

// Options to render rich text format:
// https://www.contentful.com/developers/docs/javascript/tutorials/rendering-contentful-rich-text-with-javascript/
// https://github.com/contentful/rich-text/tree/master/packages/rich-text-react-renderer

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <Bold>{text}</Bold>
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>
  }
};

const Bold = ({ children }) => <span className="bold">{children}</span>;
const Text = ({ children }) => <p className="align-center">{children}</p>;

// This component either displays data coming from above (fetched previously in Posts.js)
// or fetches its own data if it receives a slug from the router

const Post = ({ post: prefetchedPost }) => {
  const history = useHistory();

  const [post, setPost] = useState({
    fields: {
      title: null,
      pic: null,
      category: null,
      content: null,
      author: {
        sys: { id: null },
        fields: {
          name: null,
          email: null
        }
      }
    }
  });

  const { slug } = useParams();

  useEffect(() => {
    if (prefetchedPost) {
      // If data is fed from above, it's the one that will be displayed
      setPost(prefetchedPost);
    } else {
      // If no data is coming from the parent, it means the user
      // arrived directly with the full url (category + slug)
      // so we need to fetch the data of that specific article
      client
        .getEntries({
          content_type: "blogPost",
          // get the target blog post based on its unique slug
          "fields.slug": slug,
          // an alternative would be to use the getEntry method
          // https://www.contentful.com/developers/docs/javascript/tutorials/using-js-cda-sdk/
          // to get a single item; but you'll need to pass the
          // <entry_id> of the article
          order: "sys.createdAt"
        })
        .then((data) => {
          console.log(data);
          if (!data.items.length) return history.push("/");
          setPost(data.items[0]);
        })
        .catch((e) => console.log(e.message));
    }
  }, [slug, prefetchedPost, history]);

  // console.log({slug});
  // console.log({post});
  // console.log({prefetchedPost});

  const {
    fields: {
      title,
      pic,
      category,
      content,
      slug: apiSlug,
      author: {
        sys: { id },
        fields: { name, email }
      }
    }
  } = prefetchedPost || post;

  // Load images based on the author's name:
  let avatar;
  try {
    avatar = `https://raw.githubusercontent.com/MyElectricSheep/contentful-blog-correction/main/src/img/${name}.jpeg`;
  } catch {
    // If the required image does not exist, it will throw
    // an error, which we catch here to display a generic avatar
    avatar = `https://raw.githubusercontent.com/MyElectricSheep/contentful-blog-correction/main/src/img/unknown.jpeg`;
  }

  if (!content) {
    return null;
  } else {
    return (
      <section className="post">
        <header className="post-header">
          <img
            width="48"
            height="48"
            alt="Blogger&#x27;s avatar"
            className="post-avatar"
            src={avatar}
          />

          <h2 className="post-title">
            <Link
              to={`/${category}/${apiSlug || slug}`}
              className="post-title-link"
            >
              {title}
            </Link>
          </h2>

          <p className="post-meta">
            By{" "}
            <Link className="post-author" to={`/?author=${id}`}>
              {name}
            </Link>{" "}
            |{" "}
            <a className="post-author" href={`mailto:${email}`}>
              {email}
            </a>{" "}
            under{" "}
            <Link
              className="post-category post-category-js"
              to={`/${category}` || "/"}
            >
              {category ? category.toUpperCase() : "MISC"}
            </Link>
          </p>
        </header>

        {pic && (
          <img
            src={pic.fields.file.url}
            alt={pic.fields.title}
            className="pure-img l-box post-main-img"
          />
        )}
        <div className="post-description">
          {documentToReactComponents(content)}
          {/* or */}
          {/* {documentToReactComponents(post.fields.content, options)} */}
        </div>
      </section>
    );
  }
};

export default Post;
