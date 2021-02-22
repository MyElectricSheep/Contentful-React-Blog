import { Link } from "react-router-dom";
import format from "date-fns/format";

const dateFormat = "MM/dd/yyyy";

const AuthorCard = ({ author: { name, email, bio, lastPost, phone, sys } }) => {
  return (
    <div className="pure-u-1 pure-u-md-1-3">
      <div className="author-table author-table-biz">
        <div className="author-table-header">
          <h2>Author</h2>

          <span className="author-table-price">
            {name} <span>{email}</span>
          </span>
        </div>

        <ul className="author-table-list">
          <li>Author's bio:</li>
          <li>{bio}</li>
          <li>Last Post: {format(new Date(lastPost), dateFormat)}</li>
          <li>Phone number: {phone}</li>
          <li>Unique ID: {sys.id}</li>
        </ul>

        <Link to={`/?author=${sys.id}`}>
          <button className="button-choose pure-button">
            See all articles by this author
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AuthorCard;
