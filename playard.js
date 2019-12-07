class User {
    constructor(email, name){
        this.email = email;
        this.name = name;
        this.score = 0;
    }
    login() {
    console.log(this.email, 'just logged in');
    return this;
    }

    logout() {
        console.log(this.email, 'just logged out');
        return this;
    }
    updatedScore() {
    this.score++;
    console.log(`user ${this.email} Score is ${this.score}`);
    return this;
    }
};

let userOne = new User ('Jim', 'jim@icome.com');
let userTwo = new User ('Haydi', 'haydi@icome.com');

class Job {
    constructor(user) {
        this.user = user;
    }
    working() {
        console.log(this.user, 'user is working');
    }
    seeking() {
        console.log(this.user, 'is Unemployeed !!');
    }
}
