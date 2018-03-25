import React from "react";
import GoogleMapReact from "google-map-react";
import GoogleMap from "../../../shared/GoogleMap";

const AuthorInfoPost = props => {
  return <div className="container">
      <div className="row">
        <div className="col-4">
          <a href="#/authors">All authors</a>
        </div>
        <div className="col-8">
          <h1>Single Author</h1>
        </div>
      </div>
      <div className="row" id="name">
        <div className="col-5">
          <img src="http://placehold.it/150/1ee8a4" />
        </div>
        <div className=" col-6">
          <h1>{props.authorData.name}</h1>
          <p>username : {props.authorData.username}</p>
          <p>email : {props.authorData.email}</p>
          <p>phone : {props.authorData.phone}</p>
        </div>
      </div>
      <div className="row" id="address">
        <div className="col-5">
          <h1>Address </h1>
          <p>street: {props.authorData.street}</p>
          <p>city : {props.authorData.city}</p>
          <p>zipcode : {props.authorData.zipcode}</p>
        </div>
        <div className="col-5">
          <GoogleMap />
        </div>
      </div>

      <div className="row" id="company">
        <div className="col-6">
          <h1>Company </h1>
          <p>name: {props.authorData.companyName}</p>
          <p>slogan: {props.authorData.slogan}</p>
        </div>
      </div>
    </div>;
};

export default AuthorInfoPost;
