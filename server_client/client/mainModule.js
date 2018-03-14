import Post from './dataModule.js';
import divBlog from './UIModule.js';
const url = 'http://127.0.0.1:3002/';
fetch(url)
    .then((response) => response.json())
    .then((res) => {
        let blogs = [];
        res.forEach(element => {
            let title = element.title;
            let lead = element.lead;
            let blog = new Post(title, lead);
            blogs.push(blog);
        });
        return blogs;
    })
    .then((blogs) => divBlog(blogs)
    )

