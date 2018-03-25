import Post from "../entities/Post";

class GetOnePost {
  postData = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(onePost => {
          return new Post(onePost);
      });
  };
}

export const getOnePost = new GetOnePost();
