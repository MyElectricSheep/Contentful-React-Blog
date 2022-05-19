# Yummy Tech Recipes

This app was created as teaching support material to introduce students to the concept of **Headless CMS**. 

Using Contentful as a back-end (data model + content + APIs) and React as the front-end, the idea was to create a tech fictitious tech blog.

![Yummy Tech Recipes](https://raw.githubusercontent.com/MyElectricSheep/Contentful-React-Blog/main/yummy.png)

### 🛠️ Tools used:

- [Contentful](https://www.contentful.com/) (Headless CMS): for modeling + delivering the data
- [Contentful's JS SDK](https://contentful.github.io/contentful.js/contentful/9.1.28/): as an abstraction over Contentful's [Content Delivery API](https://www.contentful.com/developers/docs/references/content-delivery-api/)
- [@contentful/rich-text-react-renderer](https://www.npmjs.com/package/@contentful/rich-text-react-renderer): as the React renderer for the Contentful rich text field type.
- [@contentful/rich-text-types](https://www.npmjs.com/package/@contentful/rich-text-types): as the type definitions and constants for the Contentful rich text field type.
- [Axios](https://www.npmjs.com/package/axios): to query Contentful's [GraphQL Content API](https://www.contentful.com/developers/docs/references/graphql/)
- [Date-fns](https://date-fns.org/): as the toolset for manipulating JavaScript dates


### 🚀 Live version:

A live version of the app [can be found here](https://yummy-tech-recipes.netlify.app/)
A Codesandbox of the app [can be played with here](https://codesandbox.io/s/contentful-blog-correction-f57mb?file=/src/App.js)
