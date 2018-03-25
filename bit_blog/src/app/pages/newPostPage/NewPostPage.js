import React, { Component } from "react";
// import { Link } from "react-router-dom";

class NewPostPage extends Component {
  render() {
      return <div className="container">
          <h2 className="text-center">NEW POST</h2>
          <form>
            <div className="form-group">
              <label for="formGroupExampleInput">Title</label>
              <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Post title" />
            </div>
            <div className="form-group">
              <label for="formGroupExampleInput2">Content</label>
              <textarea className="form-control" rows="7" />
            </div>
            <div className="text-right">
              <a href="#/">
                <input type="button" className="btn btn-primary" value="Cancel" />
              </a>
              <a href="#/">
                <input type="button" className="btn btn-primary btnNewPost" value="Save" />
              </a>
            </div>
          </form>
        </div>;
  }}

  export default NewPostPage
