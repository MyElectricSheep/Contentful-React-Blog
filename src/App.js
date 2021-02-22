import React from "react";
import { Switch, Route, useParams, useLocation } from "react-router-dom";
import "./styles.css";
import queryString from "query-string";
import Posts from "./Posts";
import Post from "./Post";
import Header from "./Header";
import Footer from "./Footer";
import Authors from "./Authors";

const App = () => {
  const { topic } = useParams();
  const location = useLocation();

  const { author } = queryString.parse(location.search);

  return (
    <div id="layout" className="pure-g">
      <Header topic={topic} />
      <div className="content pure-u-1 pure-u-md-3-4">
        <div>
          <div className="posts">
            <Switch>
              <Route path="/authors/:name?">
                <Authors />
              </Route>
              <Route path="/:topic/:slug">
                <Post />
              </Route>
              <Route path="/:topic?">
                <Posts author={author} />
              </Route>
            </Switch>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
