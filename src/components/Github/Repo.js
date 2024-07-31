import React, { Component } from 'react';

class Repo extends Component {

    render() {
        const { repo } = this.props;
        return (
            <div>
                <hr />
                <div className="card">
                    <h3 className="card-header">
                        <a href={repo.html_url}>{repo.name}  </a>
                        <span className="badge badge-info"> {repo.language}</span>
                    </h3>
                    <div className="card-block">
                        <p className="card-text">{repo.description}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Repo;
