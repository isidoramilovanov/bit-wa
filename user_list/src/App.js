import React, { Component } from 'react';
import './App.css';
import usersData from './users.js';
import Header from './header.js';
import Footer from './footer.js';
import UsersList from './usersList.js';

class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
       <Header title = 'React Users' />
       <UsersList users = {usersData} />
       <Footer className='Copyright BIT'/>
    </div>
    );
  }
}

export default App;

