
class User {
    constructor(user){
        this.photo = user.picture.large;
        this.firstName = user.name.first;
        this.lastName = user.name.last;
        this.email = user.email;
        this.birthday = user.dob;
    }
}

export default User