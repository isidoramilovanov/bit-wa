import React from 'react';


const UserListComponent = (props) =>{

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
        <ul className="collection">
        <li  className="collection-item avatar">
               <img src={props.user.photo} alt={props.user.photo} className="circle" />
               <span className="title">{props.user.firstName} {props.user.lastName}</span>
               <p> <i className="material-icons">email</i> {email()}<br/>
               <i className="material-icons">cake</i> {birthDate()}
               </p>
             </li>
    
    </ul>
    
       
   
    )

}

export default UserListComponent