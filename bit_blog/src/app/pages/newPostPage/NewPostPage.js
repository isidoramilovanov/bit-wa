import React, { Component } from "react";
import { addNewPost } from "../../../services/addNewPost";
import { Redirect } from "react-router";
// import { Link } from "react-router-dom";

class NewPostPage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        title: "",
        body: "",
        fireRedirect: false
      };
    }

    handleTitleChange = event => {
      this.setState({ title: event.target.value });
    };

    handleContentChange = event => {
      this.setState({ body: event.target.value });
    };

    handleSubmit = event => {
      event.preventDefault();
      addNewPost
        .add({ title: this.state.title, body: this.state.body })
        .then(result => this.setState({ fireRedirect: true }));
    };

    handleCancel = event => {
      this.setState({ fireRedirect: true });
    };

  render() {
    const { from } = "/posts/new";
     const { fireRedirect } = this.state;
    return <div className="container">
        <h2 className="text-center">NEW POST</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label for="formGroupExampleInput">Title</label>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Post title" onChange={this.handleTitleChange} value={this.state.title} />
          </div>
          <div className="form-group">
            <label for="formGroupExampleInput2">Content</label>
            <textarea value={this.state.body} onChange={this.handleContentChange} className="form-control" rows="7" />
          </div>
          <div className="text-right">
          
              <input type="button" className="btn btn-primary" value="Cancel" onClick={this.handleCancel} />
              <input type="submit" className="btn btn-primary btnNewPost" value="Save" />
           
          </div>
        </form>
        {fireRedirect && <Redirect to={from || "/"} />}
      </div>;
  }
}

  export default NewPostPage
