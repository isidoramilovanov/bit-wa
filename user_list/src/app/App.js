import React, { Component } from 'react';
import Header from './partials/Header';
import Footer from './partials/Footer';
import UserGrid from './users/UserGrid';
import {users} from '../services/Services';
import UserList from './users/UserList'


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      usersData : [],
      showGrid : false
    }
  }

    componentDidMount(){
      users.UsersData()
      .then((users)=>{
        this.setState({
          usersData : users
        });
      })
    }

    handleClick = (event) => {
      event.preventDefault();
      this.setState((prevState, props) => {
        return {
          showGrid : !prevState.showGrid
        }
      })
    }
    
    showList = () => {
      return (
        <UserList users= {this.state.usersData}/>
      )
    }
    showGrid = () => {
      return (
        <UserGrid users= {this.state.usersData}/>
      )
    }


  render() {
    return (
      <React.Fragment>
       <Header title = 'BIT Persons' handleClick = {this.handleClick} changeList={this.state.showGrid }/>
      <div className ="container">
       
        {this.state.showGrid ? this.showGrid() : this.showList() }
       <Footer title='© 2018 Copyright BIT'/>
    </div>
    </React.Fragment>
    );
  }
}

export default App;

