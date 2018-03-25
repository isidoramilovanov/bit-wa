import React from 'react';
import { Link } from "react-router-dom";

const BlogLinks = (props) => {
    let randomNum = Math.floor(Math.random() * 7);  
    return <div className="container">
        <h3>3 more posts from same author</h3>

        <div className="list-group">
          <ul className="list-group list-group-flush">
            {props.authorPosts
              .slice(randomNum, randomNum+3)
              .map(post => {
                return (
                  <li className="list-group-item" key={post.id}>
                    <Link to={`/posts/${post.id}`}>{post.title}</Link>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>;
}

export default BlogLinks