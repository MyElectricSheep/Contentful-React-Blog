import { Link } from "react-router-dom";

const Header = ({ topic }) => {
  return (
    <div className="sidebar pure-u-1 pure-u-md-1-4">
      <div className="header">
        <h1 className="brand-title">
          YUMMY {topic !== "authors" ? topic : "CODING" || "CODING"} RECIPES
        </h1>
        <h2 className="brand-tagline">
          Or how to create a blog using Contentful
        </h2>

        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link className="pure-button" to="/">
                All
              </Link>
            </li>
            <li className="nav-item">
              <Link className="pure-button" to="/react">
                React
              </Link>
            </li>
            <li className="nav-item">
              <Link className="pure-button" to="/sql">
                SQL
              </Link>
            </li>
            <li className="nav-item">
              <Link className="pure-button" to="/javascript">
                JS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="pure-button" to="/node">
                NODE
              </Link>
            </li>
            <li className="nav-item author">
              <Link className="pure-button" to="/authors">
                Authors
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
