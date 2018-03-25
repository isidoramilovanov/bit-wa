class AddNewPost {
  add = post => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      body: JSON.stringify(post),
      headers: {
        "content-type": "application/json"
      },
      method: "POST"
    }).then(response => response.json());
  };
}

export const addNewPost = new AddNewPost();
