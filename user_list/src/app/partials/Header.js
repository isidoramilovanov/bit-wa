
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
        <a href="#" className="brand-logo center">{props.title}</a>
        <ul className="right hide-on-med-and-down">
        <li><a href="collapsible.html"><i className="material-icons">refresh</i></a></li>
        {props.changeList ? gridIcon() : listIcon()}
        </ul>
      </div>
      </nav>
    )
}
Header.propTypes = {
    title: PropTypes.string.isRequired
  }

export default Header;
