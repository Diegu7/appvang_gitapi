import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Users from './components/Users';

class App extends Component {
  state = {
    users: []
  }

  addNewUser = userInfo =>{
    this.setState(prevState => ({
      users: prevState.users.concat(userInfo)
    }))
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Search onSubmit={this.addNewUser}/>
          <br />
          <Users users={this.state.users}/>
        </div>
      </div>
    );
  }
}

export default App;
