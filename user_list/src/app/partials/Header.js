
import React from 'react';
import PropTypes from "prop-types";


const Header = (props) => {

  const listIcon = () => {
    return (
      <li><a href="#" onClick={props.handleClick}><i className="material-icons">view_list</i></a></li>
    )
  }

  const gridIcon = () => {
    return (
      <li><a href="#" onClick={props.handleClick}><i className="material-icons">view_module</i></a></li>
    )
  }

    return (
      
        <nav>
        <div className="nav-wrapper">
       <a href="#/" className="brand-logo center">{props.title}</a>
        {(props.homePath) ? <ul className="right hide-on-med-and-down">
        <li><a href="#/about">About</a></li>
        <li><a href="#" onClick={props.handleRefresh}><i className="material-icons">refresh</i></a></li>
        {props.changeList ? listIcon() : gridIcon()}
        </ul> : <ul></ul>}
      </div>
      </nav>
      
 
    )
}
Header.propTypes = {
    title: PropTypes.string.isRequired
  }

export default Header;
