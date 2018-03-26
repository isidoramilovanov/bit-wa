import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";



const AuthorsList = (props) => {
  
    return <div className="container bg">
        <h2 className="text-center" id="authors">
          AUTHORS ({props.listOfAuthors.length})
        </h2>

        <div>
          <ul className='lists'>
                {props.listOfAuthors.map((author, i) => {
                  return <li  key={author.authorId}>
                      <Link to={`/author${author.authorId}`}>
                        <h4>{author.name}</h4>
                      </Link>
                    </li>;
                })}

          </ul>
        </div>
      </div>;
}

AuthorsList.propTypes = {
  listOfAuthors: PropTypes.array.isRequired
}

export default AuthorsList

