import React, {Component} from 'react';
import PostList from './PostList';
import {getAllPosts} from "../../../services/getAllPosts";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }
  componentDidMount() {
   getAllPosts.postsData().then(myPosts => {
      this.setState({
        posts: myPosts
      });
    });
  }

  render() {
    return <PostList posts={this.state.posts} />;
  }
}


export default HomePage