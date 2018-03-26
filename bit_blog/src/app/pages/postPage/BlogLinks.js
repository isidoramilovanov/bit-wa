import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const BlogLinks = (props) => {
    let randomNum = Math.floor(Math.random() * (props.authorPosts.length-3));  
    return <div className="container">
        <h3>3 more posts from same author</h3>
        <br />
        <div className="list-group">
          <ul className="list-group list-group-flush">
            {props.authorPosts
              .slice(randomNum, randomNum+3)
              .map(post => {
                return (
                  <li className="list-group-item blogItem" key={post.id}>
                    <Link to={`/posts/${post.id}`}>{post.title}</Link>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>;
}

BlogLinks.propTypes = {
  authorPosts: PropTypes.array.isRequired
}


export default BlogLinks