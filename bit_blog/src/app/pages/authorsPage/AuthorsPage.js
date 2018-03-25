import React, { Component } from 'react';
import AuthorsList from './AuthorsList';
import {getAuthorsData} from "../../../services/getAuthorsData";

class AuthorsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authors: []
    };
  }
  componentDidMount() {
    getAuthorsData.authorsData().then(allAuthors => {
      this.setState({
        authors: allAuthors
      });
    });
  }

  render() {
    return <AuthorsList listOfAuthors={this.state.authors} />;
  }
}

export default AuthorsPage