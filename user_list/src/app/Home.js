import React, { Component } from 'react';
import Header from './partials/Header';
import UserGrid from './users/UserGrid';
import {users} from '../services/Services';
import UserList from './users/UserList';
import LoadingPage from './partials/LoadingPage';
import Search from './partials/Search';

class Home extends Component {
    constructor(props){
      super(props);
      this.state = {
        loading:true,
        usersData : [],
        filteredUsers: [],
        showGrid : JSON.parse(localStorage.getItem('showGrid')) || false
      }
    }
  
    componentDidMount(){
  setTimeout(()=>  users.UsersData()
  .then((users)=>{
    this.setState({
      usersData : users,
      loading: false,
      filteredUsers: users
    })
  }), 1500)
      
      }
      
      
      handleClick = (event) => {
        localStorage.setItem('showGrid',JSON.stringify(!this.state.showGrid));
        event.preventDefault();
        this.setState((prevState, props) => {
          return {
            showGrid : !prevState.showGrid
          }
        })
      }
      
  
      handleRefresh = (event) =>{
        users.UsersData()
        .then((users)=>{
          this.setState({
           filteredUsers : users
          });
        })
       
      }
  
      searchFilter = (event) => {
       let inputValue = event.target.value;
       let newUsers = this.state.usersData.filter((user)=>`${user.firstName} ${user.lastName}`.toLowerCase().includes(inputValue.toLowerCase()));
       this.setState({
           filteredUsers : newUsers

        })
      }
  
     
      showList = () => {
        return (
          <UserList users= {this.state.filteredUsers}/>
        )
      }
      showGrid = () => {
        return (
          <UserGrid users= {this.state.filteredUsers}/>
        )
      }
      content = ()=>{
        return (
        <div className ="container">
          <Search searchFilter = {this.searchFilter} inputValue = {this.state.inputValue}/>
          {this.state.showGrid ? this.showGrid() : this.showList() }
      </div>
        )
      }
  
  
    render() {
   
      return (
        <React.Fragment>
         <Header title = 'BIT Persons' homePath = {this.props.match.path} handleClick = {this.handleClick} changeList={this.state.showGrid} handleRefresh ={this.handleRefresh} />
      {(this.state.loading) ? <LoadingPage/> : this.content()}
      </React.Fragment>
      );
    }
  }
  
  export default Home