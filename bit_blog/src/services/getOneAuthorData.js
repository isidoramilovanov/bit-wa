import Author from "../entities/Author"

class GetOneAuthor {
  oneAuthorData = id => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(author => {
        return new Author(author);
      });
  };
}

export const getOneAuthorData = new GetOneAuthor();
