import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import client from "./client";
import Post from "./Post";

const Posts = ({ author }) => {
  const [posts, setPosts] = useState();

  const { topic } = useParams();

  useEffect(() => {
    // https://www.contentful.com/developers/docs/references/content-delivery-api/
    // https://www.contentful.com/developers/docs/javascript/tutorials/using-js-cda-sdk/
    client
      .getEntries({
        content_type: "blogPost",
        "fields.category": topic,
        "fields.author.sys.id": author,
        // skip: 100,
        // limit: 200,
        order: "sys.createdAt"
      })
      .then((data) => setPosts(data.items))
      .catch((e) => console.log(e.message));
  }, [topic, author]);

  return (
    <>
      {posts && posts.length >= 1 ? (
        <>
          <h1 className="content-subhead">Recent Posts</h1>
          {posts.map((post) => {
            console.log(post);
            return <Post key={post.sys.id} post={post} />;
          })}
        </>
      ) : (
        <h1 className="content-subhead">
          Oh, seems like there's no posts yet related to {topic || "that topic"}
          !
        </h1>
      )}
    </>
  );
};

export default Posts;
