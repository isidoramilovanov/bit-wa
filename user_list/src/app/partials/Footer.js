import React from 'react';


const Footer = (props) => {
    return (
        <footer className="page-footer">
        <div className="footer-copyright">
        <div className="container">{props.title}
        <p className="grey-text text-lighten-4 right">{props.timer}</p>
        </div>
      </div>
      </footer>
    )
}


export default Footer;
