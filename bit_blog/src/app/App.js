import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from './pages/homePage/HomePage';
import AboutPage from './pages/aboutPage/AboutPage';
import PostPage from './pages/postPage/PostPage';
import AuthorsPage from './pages/authorsPage/AuthorsPage';
import AuthorInfoPage from './pages/authorInfoPage/AuthorInfoPage';
import Header from './partials/Header';
import Footer from './partials/Footer';
import NewPostPage from './pages/newPostPage/NewPostPage';



class App extends Component {
  render() {
    return <React.Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/posts/new" component={NewPostPage} />
          <Route path="/posts/:id" component={PostPage} />
          <Route path="/about" component={AboutPage} />
          <Route exact path="/authors" component={AuthorsPage} />
          <Route path="/author:id" component={AuthorInfoPage} />
        </Switch>
        <Footer />
      </React.Fragment>;
  }
}

export default App;
