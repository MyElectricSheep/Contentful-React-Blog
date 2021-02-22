const getAuthors = `
query {
  blogAuthorCollection {
    items{
      sys{
        id
      }
      name
      email
      bio
      lastPost
      phone
      articlesCollection {
        items {
          sys {
            id
          }
        }
      }
    }
  }
  blogPostCollection {
    items {
      sys {
        id
      }
      title
      slug
    }
  }
}
  `;

const getAuthor = (id) => `
query {
  blogAuthor(id: "${id}") {
    name
    email
    bio
    lastPost
    phone
  }
}
  `;

export { getAuthor, getAuthors };
