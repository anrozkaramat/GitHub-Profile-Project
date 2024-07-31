import React, { Component } from 'react';
import Profile from './components/Github/User_Profile';
import Search from './components/Github/Search';
import 'whatwg-fetch';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    // Initialize state with a default username or retrieve it from local storage
    const savedUsername = localStorage.getItem('githubUsername') || 'ErikBjare';
    this.state = {
      username: savedUsername,
      userData: [],
      userRepos: [],
      perPage: 7
    };
  }

  // Get User's profile information from github API
  getUserData = () => {
    fetch('https://api.github.com/users/' + this.state.username)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({ userData: json });
      })
      .catch(error => {
        console.log('There was a problem with fetch operation: ' + error.message);
      });
  }

  // Get User's repositories Github API call
  getUserRepos = () => {
    fetch('https://api.github.com/users/' + this.state.username + '/repos?per_page=' + this.state.perPage + '&sort=created')
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({ userRepos: json });
      })
      .catch(error => {
        console.log('There was a problem with fetch operation: ' + error.message);
      });
  }

  handleFormSubmit = (username) => {
    this.setState({ username }, () => {
      // Save the new username to local storage
      localStorage.setItem('githubUsername', username);
      this.getUserData();
      this.getUserRepos();
    });
  }

  componentDidMount() {
    this.getUserData();
    this.getUserRepos();
  }

  render() {
    return (
      <div>
        <Search onFormSubmit={this.handleFormSubmit} />
        <Profile {...this.state} />
      </div>
    );
  }
}

export default App;
