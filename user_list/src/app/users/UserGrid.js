import React from 'react';
import UserCard from './UserCard';

const UserGrid = (props) => {
    
    return (
        <div className = 'row'>
        {props.users.map((user, i)=> {
            return  <UserCard user={user} key={i}/>
        })}
           
        </div>
    )
}

export default UserGrid