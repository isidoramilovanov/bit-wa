import React from 'react';
// import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const PostList = (props) => {


    return <div className="container postBg">
        <h2 className="text-center postHeading">POSTS</h2>
        <div>
          <ul className='lists' >
          {props.posts.map((post, i)=>{
              return <li  key={i}>
                  <a href ={`#posts/${post.userId}`} className="text-dark" >
                    <h4 className='font-weight-bold'>{post.title}</h4>
                  </a>
                  <p>{post.body}</p>
                </li>;
          })}
          </ul>
        </div>
      </div>
    
}

PostList.propTypes = {
  posts: PropTypes.array.isRequired
}


export default PostList

