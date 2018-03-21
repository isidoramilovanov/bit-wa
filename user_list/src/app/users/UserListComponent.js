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

        
          const insideCard = () => {
            return <React.Fragment>
                <img src={props.user.photo} alt={props.user.photo} className="circle" />
                <span className="title">
                  {props.user.firstName.replace(props.user.firstName[0], props.user.firstName[0].toUpperCase())} {props.user.lastName.replace(props.user.lastName[0], props.user.lastName[0].toUpperCase())}
                </span>
                <p>
                  <i className="material-icons">email</i> {email()}
                  <br />
                  <i className="material-icons">
                    cake
                  </i> {birthDate()}
                </p>
              </React.Fragment>;
          };

          const femaleOrMaleCard = () => {
            if (props.user.gender === "female") {
              return <li className="collection-item avatar red lighten-5">
                  {insideCard()}
                </li>;
            }
            return <li className="collection-item avatar blue lighten-5">
                {insideCard()}
              </li>;
          };
    return (
        <ul className="collection">
        {femaleOrMaleCard()}
    
    </ul>
    
       
   
    )

}

export default UserListComponent