import React from 'react';
import { Link } from "react-router-dom";

const BlogPost = (props) => {
    return <div className="container" className="text-center">
        <h1 id="postTitle">{props.authorPost.title}</h1>
        <Link to={`/author${props.authorPost.userId}`}>{props.authorInfo.name}</Link>
        <p id="posts"> {props.authorPost.body}</p>
      </div>;
}

export default BlogPost