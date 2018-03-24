import React from 'react';
import AuthorListItem from './AuthorListItem';


const AuthorsList = () => {
    return (
        <div className='container'>
            <h2 className = 'text-center' id= 'authors'>AUTHORS (6)</h2>
        <div>
            <ul className="list-group list-group-flush">
            <li className="list-group-item"><AuthorListItem /></li>
            <li className="list-group-item">< AuthorListItem/></li>
            <li className="list-group-item">< AuthorListItem/></li>
            <li className="list-group-item">< AuthorListItem/></li>
            <li className="list-group-item">< AuthorListItem/></li>
            <li className="list-group-item">< AuthorListItem/></li>
        </ul>
        </div>
        </div>
     
    )
}

export default AuthorsList