import React from 'react';
import { Link } from "react-router-dom";



const AuthorsList = (props) => {
  
    return <div className="container">
        <h2 className="text-center" id="authors">
          AUTHORS ({props.listOfAuthors.length})
        </h2>

        <div>
          <ul className="list-group list-group-flush">
                {props.listOfAuthors.map((author, i) => {
                  return <li className="list-group-item" key={author.authorId}>
                      <Link to={`/author${author.authorId}`} className="collection-item">
                        <h4>{author.name}</h4>
                      </Link>
                    </li>;
                })}

          </ul>
        </div>
      </div>;
}

export default AuthorsList