class GetAllPostFromAuthor {
  postsFromAuthor = id => {
    return fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    ).then(response => response.json());
  };
}


export const getAllPostFromAuthor = new GetAllPostFromAuthor();