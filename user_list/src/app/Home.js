import React, {
  Component
} from 'react';
import Header from './partials/Header';
import UserGrid from './users/UserGrid';
import {
  users
} from '../services/Services';
import UserList from './users/UserList';
import LoadingPage from './partials/LoadingPage';
import Search from './partials/Search';
import NoUsers from './partials/NoUsers';
import Footer from './partials/Footer';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      usersData: [],
      filteredUsers: [],
      showGrid: false,
      startTime : new Date(),
      time: 0

    }
  }
  

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );

    if (localStorage.getItem('newUsers')) {
      let saveUsersString = localStorage.getItem('newUsers');
      let saveUsers = JSON.parse(saveUsersString);
      let saveModeGridString = localStorage.getItem('showGridMode');
      let saveModeGrid = JSON.parse(saveModeGridString);
      this.setState({
        usersData: saveUsers,
        filteredUsers: saveUsers,
        showGrid: saveModeGrid,
        loading: false
      })
    }
     else {
      users.UsersData()
        .then((users) => {
          this.setState({
            usersData: users,
            filteredUsers: users,
            loading: false
          })
          localStorage.removeItem('newUsers');
          localStorage.setItem('newUsers', JSON.stringify(users))
        })
    }
  }

  handleClick = (event) => {
    event.preventDefault();
    localStorage.removeItem('showGridMode');
    localStorage.setItem('showGridMode', JSON.stringify(!this.state.showGrid));
    this.setState((prevState, props) => {
      return {
        showGrid: !prevState.showGrid
      }
    })
  }

  tick =()=> {
    this.setState({ 
      time: new Date()
    });
  }

  newTime = () => {
    let startTimeMilliseconds = Date.parse(this.state.startTime);
    let currentTimeMilliseconds = Date.parse(this.state.time);
    let sec= (currentTimeMilliseconds-startTimeMilliseconds)/1000;
    let min = Math.floor(sec / 60);
    sec = sec % 60;
     let hour = Math.floor(min/60);
     min = min %60;
     let day = Math.floor(hour/24);
    hour = hour%60;
    let text = `Last update: `;
   
   if (hour<1) {
     return `${text} ${min} minute ago` 
   } else if (day<1){
       return `${text}  Over an hour ago`
   } else if (day>=2 && day<7 ){
      return `${text} ${day} days ago`
  } else if (day>=7 && day<30){
      return `${text} Over a week ago`
  } else if (day =30){
       return `${text} One month ago`
  } else {
      return `${text} Over a month ago`
  }
  }

  handleRefresh = (event) => {
    users.UsersData()
      .then((users) => {
        this.setState({
          usersData:users,
          filteredUsers: users
        })
        localStorage.removeItem('newUsers');
        localStorage.setItem('newUsers', JSON.stringify(users))
      })

  }

  searchFilter = (event) => {
    let inputValue = event.target.value;
    let newUsers = this.state.usersData.filter((user) => `${user.firstName} ${user.lastName}`.toLowerCase().includes(inputValue.toLowerCase()));
    this.setState({
      filteredUsers: newUsers

    })
  }

  isThereUsers = () => {
    if (this.state.filteredUsers.length === 0) {
      return true
    }
    return false;
  }



  showList = () => {
    return ( <UserList users = {
        this.state.filteredUsers
      }/>
    )
  }
  showGrid = () => {
    return ( <UserGrid users = {
        this.state.filteredUsers
      }/>
    )
  }

  CountMaleAndFemale = () => {
    const male = this.state.filteredUsers.filter((user)=>user.gender==='male');
    const female = this.state.filteredUsers.filter((user)=>user.gender==='female');

    return `Male: ${male.length} Female: ${female.length}`
}
  content = () => {
    return (
     
        <div className = "container" >
        < Search searchFilter = {this.searchFilter} inputValue = {this.state.inputValue} />
        <div className="grey-text text-darken-1 right-align"> {this.CountMaleAndFemale()}</div>
        
      
        {
        (this.isThereUsers()) ? < NoUsers /> : < React.Fragment > {
          (this.state.showGrid) ? this.showGrid() : this.showList()
        } </React.Fragment>
      }  
      </div>
     
  )
}


render() {

  return ( <React.Fragment >
      <Header title = 'BIT Persons' homePath = {this.props.match.path }
      handleClick = {this.handleClick}
      changeList = {this.state.showGrid }
      handleRefresh = { this.handleRefresh  }/> 
      { (this.state.loading) ? < LoadingPage /> : this.content()}
      <Footer title='© 2018 Copyright BIT' timer = {this.newTime()}/>
    </React.Fragment>
);
}
}

export default Home