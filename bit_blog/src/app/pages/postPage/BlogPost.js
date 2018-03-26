import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const BlogPost = (props) => {
    return <div className="container" className="text-center">
        <h1 id="postTitle">{props.authorPost.title}</h1>
        <p className='postLink'><Link to={`/author${props.authorPost.userId}`}>{props.authorInfo.name}</Link></p>
        <p id="posts"> {props.authorPost.body}</p>
      </div>;
}


BlogPost.propTypes = {
    authorPost: PropTypes.object.isRequired,
    authorInfo: PropTypes.object.isRequired
  }
export default BlogPost