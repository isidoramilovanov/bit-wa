import React from 'react';
import UserListComponent from './UserListComponent'

const UserList = (props) =>{

    return (
        <div className = 'row'>
        {props.users.map((user, i)=> {
            return  <UserListComponent user={user} key={i}/>
        })}
           
        </div>
    )
}

export default UserList;