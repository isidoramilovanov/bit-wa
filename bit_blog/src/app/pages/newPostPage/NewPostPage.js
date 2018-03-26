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
        redirectToHome: false,
        errorMessage : ''
      };
    }


    handleTitleChange = event => {
      this.setState({ title: event.target.value });
    };

    handleBodyChange = event => {
      this.setState({ body: event.target.value });
    };

    handleSubmit = event => {
      if (this.state.title.length>15){
        this.setState({
          errorMessage: 'Title must be shorter',
          redirectToHome: false
        })
      } else if (this.state.body.length>500){
        this.setState({
          errorMessage: 'Content must be shorter',
          redirectToHome: false
        })
      }
      else{
      event.preventDefault();
      addNewPost
        .add({ title: this.state.title, body: this.state.body })
        .then(result => this.setState({ redirectToHome: true }));
    }};

    handleCancel = event => {
      this.setState({ redirectToHome: true });
    };

  render() {
   
    return <div className="container postPage">
        <div className='row'>
        <div className='offset-2 col-8'>
        <h2 className="text-center">NEW POST</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label for="formGroupExampleInput">Title</label>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Post title" onChange={this.handleTitleChange} value={this.state.title} required/>
          </div>
          <div className="form-group">
            <label for="formGroupExampleInput2">Content</label>
            <textarea value={this.state.body} onChange={this.handleBodyChange} className="form-control" rows="7" required/>
          </div>
          <div>{this.state.errorMessage} </div>
          <div className="text-right">
          
              <input type="button" className="btn btn-outline-primary waves-effect" value="Cancel" onClick={this.handleCancel} />
              <input type="submit" className="btn btn-outline-primary waves-effect btnNewPost" value="Save" />
          
          </div>
        </form>
       { this.state.redirectToHome  && <Redirect to={"/"} />
      }
      </div>
      </div>
      </div>
  }
}

  export default NewPostPage
