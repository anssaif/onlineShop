class User {
    constructor(email, name) {
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

let userOne = new User('Jim', 'jim@icome.com');
let userTwo = new User('Haydi', 'haydi@icome.com');

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
users = [userOne, userTwo];
class Admin extends User {
    deletUser(user) {
        users = users.filter(())
    }
}







<% productList.forEach( Item=> {  %>
    <li class="list-group-item"><%= Item.prduct  %></li>
<% }); %>



<table class="table">
  <thead class="thead-dark">
    <tr>
      
      <th scope="col">Product</th>
      <th scope="col">Discription</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>


</table>

