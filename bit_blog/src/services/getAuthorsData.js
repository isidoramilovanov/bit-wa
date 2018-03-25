import Author from '../entities/Author'

class GetAuthorsData{
    authorsData = ()=>{
return fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => {
return data.map((oneAuthor, i)=>{
    return new Author(oneAuthor)
})
  }
);
    }
}

export const getAuthorsData = new GetAuthorsData();