
import React from 'react';
import PropTypes from "prop-types";

const Header = (props) => {
    return (
        <h3 className="card-panel red darken-1 center-align white-text ">{props.title}</h3>
    )
}
Header.propTypes = {
    title: PropTypes.string.isRequired
  }

export default Header;
