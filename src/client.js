import * as contentful from "contentful";

const client = contentful.createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE,
  accessToken: process.env.REACT_APP_CONTENTFUL_CDA_TOKEN
});

export default client;
