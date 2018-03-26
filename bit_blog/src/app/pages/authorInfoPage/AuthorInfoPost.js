import React from "react";
import PropTypes from "prop-types";


const AuthorInfoPost = props => {
  return <div className="container">
      <div className="row" id='infoPageHeadRow'>
        <div className="col-4">
          <a className="font-weight-bold" href="#/authors">
          <i className="fa fa-angle-double-left"> </i>
           All authors
          </a>
        </div>
        <div className="col-8 ">
          <h1>Single Author</h1>
        </div>
      </div>
      <div className="row" id="name">
        <div className="offset-md-1 col-md-5 col-sm-12 ">
          <img src="https://www.freeiconspng.com/uploads/blank-face-person-icon-7.png" />
        </div>
        <div className=" col-md-6 col-sm-12">
          <h1 className='authorInfo'>{props.authorData.name}</h1>
          <p><span className="font-weight-bold"> username :</span> {props.authorData.username}</p>
          <p><span className="font-weight-bold">email : </span>  {props.authorData.email}</p>
          <p><span className="font-weight-bold">phone : </span>  {props.authorData.phone}</p>
        </div>
      </div>
      <div className="row" id="address">
        <div className="offset-md-1 col-md-5 col-sm-12">
          <h1 className='authorInfo'>Address </h1>
          <p> <span className="font-weight-bold">street: </span>{props.authorData.street}</p>
          <p><span className="font-weight-bold">city : </span>{props.authorData.city}</p>
          <p><span className="font-weight-bold">zipcode : </span>{props.authorData.zipcode}</p>
        </div>
        <div className="col-md-5  col-sm-12">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11322.276616522473!2d20.45802175!3d44.80996845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ssr!2srs!4v1522051096299" width="350" height="200"  frameborder="0" style={{border:0}} allowfullscreen></iframe>
        </div>
      </div>

      <div className="row" id="company">
        <div className="offset-1 col-6">
          <h1 className='authorInfo'>Company </h1>
          <p> <span className="font-weight-bold">name: </span>{props.authorData.companyName} </p>
          <p> <span className="font-weight-bold"> slogan:  </span> {props.authorData.slogan}</p>
        </div>
      </div>
    </div>;
};

AuthorInfoPost.propTypes = {
  authorData: PropTypes.object.isRequired
}


export default AuthorInfoPost;
