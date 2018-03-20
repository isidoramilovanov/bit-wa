import React from 'react';

const UserCard = (props) => {
    const email = ()=>{
        const emailOrigin = props.user.email;
        const separated = emailOrigin.split('@');
        const nameAndSurname = separated[0];
        const hidden = nameAndSurname.slice(0,3)+ '...' + nameAndSurname.slice(nameAndSurname.length-3); 
    
        return hidden + '@' + separated[1]
    }

    const birthDate = () =>{
        const dateOrigin = new Date(props.user.birthday);
        const getYear = dateOrigin.getFullYear();
        const getMonth = dateOrigin.getMonth()+1;
        const getDay =  dateOrigin.getDay()+1;
        return getDay + '.'+ getMonth + '.' + getYear;
    }
    return (
    
    <div className="col s4 m4">
      <div className="card">
        <div className="card-image">
          <img src={props.user.photo} alt={props.user.photo}/>
          <span className="card-title">{props.user.firstName}</span>
        </div>
        <div className="card-content">
          <p>{email()}</p>
          <p>Birth date: {birthDate()}</p>
        </div>
       
      </div>
    </div>
 
    )
}

export default UserCard

