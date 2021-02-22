// import { useParams } from "react-router-dom";
import useContentful from "./hooks/useContentful";
import { getAuthors } from "./graphql/queries";
import AuthorCard from "./AuthorCard";

const Authors = () => {
  // const { name } = useParams();

  const { data, isLoading, isError } = useContentful(getAuthors);

  if (isLoading) return <h1>Loading...</h1>;

  if (isError) return <h1>Error...</h1>;

  return (
    <div className="l-content">
      <div className="author-tables pure-g">
        {data &&
          data.data.blogAuthorCollection.items.reverse().map((author) => {
            return <AuthorCard key={author.sys.id} author={author} />;
          })}
      </div>
    </div>
  );
};

export default Authors;
