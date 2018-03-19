import React from 'react';
import PropTypes from "prop-types";

const Footer = (props) => {
    return (
        <p>{props.className}</p>
    )
}
Footer.propTypes = {
    className: PropTypes.string.isRequired
  }

export default Footer;
