import React from 'react';


const UsersList = (props) => {
    return (
        <div class='row'>
            {props.users.map((item)=>
            <div className = 'offset-s2 col s8'>
            <img src={item.picture.thumbnail} alt={item.name.first} />
            <p>name: {item.name.first}</p> 
            <p>email: {item.email}</p> 
            <p>date of birth: {item.dob}</p>
            </div>)}
       </div>
    )
}




export default UsersList;
