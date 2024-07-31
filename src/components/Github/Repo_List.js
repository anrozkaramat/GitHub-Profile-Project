import React, { Component } from 'react';
import Repo from './Repo';

class RepoList extends Component {

    render() {
        return (
            <div>
                <div>
                   {
                       this.props.userRepos.map(repo => {
                           return <Repo
                                    repo= {repo}
                                    key={repo.id}
                                    {...this.props}
                           />
                       })
                   }
                </div>
            </div>
        );
    }
}

export default RepoList;
