import React, { Component } from 'react';
import RepoList from './Repo_List';

class Profile extends Component {

  render() {
    return (
      <div>
        <div className="card">
          <h3 className="text-center card-header">{this.props.userData.name}</h3>
          <div className="card-block">
            <div className="row">
              <div className="col-sm-4">
                <img className="img-thumbnail" src={this.props.userData.avatar_url} alt="" />
              </div>
              <div className="col-sm-8">
                <h4 className="card-title">{this.props.userData.login}</h4>
                <p className="card-text">
                <span className="badge badge-default">Repos: {this.props.userData.public_repos}</span>
                <span className="badge badge-default">Gists: {this.props.userData.public_gists}</span>
                <span className="badge badge-default">Followers: {this.props.userData.followers}</span>
                <span className="badge badge-default">Following: {this.props.userData.following}</span>
                </p>
                <p className="card-text"><span className="badge badge-default">Location </span>:{this.props.userData.location}</p>
                <p className="card-text"><span className="badge badge-default">Bio </span>:{this.props.userData.bio}</p>
                <a href={this.props.userData.html_url} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Visit Github Profile</a>
              </div>
            </div>
            <hr />
            <h3 className="text-center card-header">{this.props.userData.login}'s Repositories</h3>
            <RepoList userRepos = {this.props.userRepos}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
