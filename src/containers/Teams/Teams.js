import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchTeams } from '../../services/Api';
import TeamCard from '../../components/TeamCard/TeamCard';

import './Teams.css';

export default class Teams extends Component {
  state = { teams: [], loading: false, error: false };

  componentDidMount() {
    this.setState({ loading: true });

    fetchTeams()
      .then(response => this.setState({
        teams: response,
        error: false,
        loading: false,
      }))
      .catch(() => this.setState({
        error: true,
        loading: false
      }));
  }

  render() {
    const { teams, error, loading } = this.state;

    if (loading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>Oh no..</p>;
    }

    return (
      <div className="teams-list">
        {teams.map(team => (
          <Link
            key={team.team_key}
            to={`/teams/${team.team_key}`}
            className="link"
          >
            <TeamCard team={team} />
          </Link>
        ))}
      </div>
    );
  }
}
