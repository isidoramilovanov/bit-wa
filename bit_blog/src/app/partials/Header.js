import React from 'react';

const Header= () =>{
  return (  

    <nav className="navbar navbar-expand-md navbar-dark bg-info colorHeaderAndFooter">
    <a id ='logo' className="navbar-brand mx-auto" href="#">BIT BLOG</a>
    <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#/authors">Authors</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#/about">About</a>
            </li>
        </ul>
    </div>
    </nav>
)
}

export default Header