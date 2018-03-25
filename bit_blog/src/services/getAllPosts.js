import Post from "../entities/Post";

class GetPostsData {
  postsData = () => {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => {
        return data.map((onePost, i) => {
          return new Post(onePost);
        });
      });
  };
}

export const getAllPosts = new GetPostsData();
