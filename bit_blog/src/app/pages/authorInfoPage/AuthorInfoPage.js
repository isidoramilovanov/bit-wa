import React, { Component } from 'react';
import AuthorInfoPost from './AuthorInfoPost';
import {getOneAuthorData} from '../../../services/getOneAuthorData';

class AuthorInfoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: {},
    };
  }

  
  componentDidMount() {
    getOneAuthorData
      .oneAuthorData(this.props.match.params.id)
      .then(myAuthor => {
        this.setState({
          author: myAuthor
        });
      });
  }

  render() {
    return <AuthorInfoPost authorData={this.state.author} />;
  }
}

export default AuthorInfoPage