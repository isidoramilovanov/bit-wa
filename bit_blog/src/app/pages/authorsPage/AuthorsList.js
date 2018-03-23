import React from 'react';
import AuthorListItem from './AuthorListItem';


const AuthorsList = () => {
    return (
        <div className='container'>
            <h2>AUTHORS (6)</h2>
        
            <ul className="list-group list-group-flush">
            <li className="list-group-item"><AuthorListItem /></li>
            <li className="list-group-item">< AuthorListItem/></li>
            <li className="list-group-item">< AuthorListItem/></li>
            <li className="list-group-item">< AuthorListItem/></li>
            <li className="list-group-item">< AuthorListItem/></li>
            <li className="list-group-item">< AuthorListItem/></li>
        </ul>
            
        </div>
     
    )
}

export default AuthorsList