import User from '../entities/User';

class Users {
  UsersData (){
      return fetch('https://randomuser.me/api/?results=15')
      .then((response)=> { return response.json()})
    .then((data)=>{return data.results})
    .then((result)=> {
        return result.map((user, i) => {
            return new User(user) 
        })
    })
  }
}

export const users = new Users()