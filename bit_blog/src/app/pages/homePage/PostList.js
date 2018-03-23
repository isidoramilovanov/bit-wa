import React from 'react';
import PostListItem from './PostListItem';

const PostList = () => {
    return (
        
        <div className='container'>
       <h2 className = 'text-center'>POSTS</h2>
       <div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item"><PostListItem /></li>
            <li className="list-group-item"><PostListItem /></li>
            <li className="list-group-item"><PostListItem /></li>
            <li className="list-group-item"><PostListItem /></li>
        </ul>
        </div>
        </div>
    )
}

export default PostList
