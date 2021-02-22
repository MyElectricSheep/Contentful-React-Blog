import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import App from "./App";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Router>
    <Route path="/:topic?" component={App} />
  </Router>,
  rootElement
);
