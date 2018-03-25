import React from 'react';
import { Link } from "react-router-dom";

const PostList = (props) => {
    return <div className="container">
        <h2 className="text-center">POSTS</h2>
        <div>
          <ul className="list-group list-group-flush">
          {props.posts.map((post, i)=>{
              return <li className="list-group-item" key={i}>
                  <Link to={`posts/${post.userId}`}>
                    <h4>{post.title}</h4>
                  </Link>
                  <p>{post.body}</p>
                </li>;
          })}
          </ul>
        </div>
      </div>
}

export default PostList
