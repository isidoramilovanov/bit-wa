import React, {Component} from 'react';
import BlogPost from './BlogPost';
import BlogLinks from './BlogLinks';
import {getOnePost} from '../../../services/getOnePost'
import { getAllPostFromAuthor } from "../../../services/getAllPostFromAuthor";
import { getOneAuthorData } from "../../../services/getOneAuthorData";

class PostPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {},
      postsOfAuthor: [],
      authorData: {}
    };
  }

  getPostsFromAuthor = () => {
    getOnePost
      .postData(this.props.match.params.id)
      .then(myPost => {
        this.setState({
          post: myPost
        });
        
        return getAllPostFromAuthor.postsFromAuthor(myPost.userId);
      })
      .then(authorsPosts => {
        this.setState({
          postsOfAuthor: authorsPosts
        });
      });
  };

getInfoAboutAuthor = () =>{
      getOnePost
        .postData(this.props.match.params.id)
        .then(myPost => {
          this.setState({ post: myPost });
          return getOneAuthorData.oneAuthorData(myPost.userId);
        })
        .then(authorInformation => {
          this.setState({ 
              authorData: authorInformation });
        });
}

  componentDidMount() {
    this.getPostsFromAuthor();
     this.getInfoAboutAuthor()
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.match.params.id !== this.props.match.params.id) {
      window.location.reload();
    }
  };

  render() {
    
    return (<div className='container'>
        <BlogPost authorPost={this.state.post} authorInfo={this.state.authorData}/>
        <BlogLinks authorPosts={this.state.postsOfAuthor} />
      </div>)
  }
}




export default PostPage

