import { useState, useEffect } from "react";
import axios from "axios";

// Unpack values from the process.env object
const {
  REACT_APP_CONTENTFUL_SPACE,
  REACT_APP_CONTENTFUL_CDA_TOKEN
} = process.env;

const useContentful = (query) => {
  if (!query) throw new Error("You must supply a GraphQL query");

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios({
      url: `https://graphql.contentful.com/content/v1/spaces/${REACT_APP_CONTENTFUL_SPACE}`,
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${REACT_APP_CONTENTFUL_CDA_TOKEN}`
      },
      data: {
        query
      }
    })
      .then((result) => {
        console.log(result);
        setData(result.data);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e.message);
        setIsLoading(false);
        setIsError(true);
      });
  }, [query]);

  return { data, isLoading, isError };
};

export default useContentful;
