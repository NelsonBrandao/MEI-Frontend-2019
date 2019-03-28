import React, { Component } from 'react';
import List from '../../components/List/List';
import { fetchTeam } from '../../services/MockApi';
import TeamCard from '../../components/TeamCard/TeamCard';
import PlayerCard from '../../components/PlayerCard/PlayerCard';

import './Team.css';

export default class Team extends Component {
  state = {
    team: {},
    players: [],
    error: false,
    loading: false,
  };

  componentDidMount () {
    this.setState({ loading: true });

    fetchTeam(this.props.match.params.id)
      .then(team => this.setState({
        team,
        error: false,
        loading: false,
        players: team.players,
      }))
      .catch(() => this.setState({ loading: false, error: false }));
  }

  filterPlayer = (value, player) => (
    player.player_name.toLowerCase().indexOf(value.toLowerCase()) >= 0
  );

  render () {
    const {
      team,
      error,
      players,
      loading,
    } = this.state;

    if (loading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>There was an error...</p>;
    }

    return (
      <div className="team">
        <TeamCard team={team} />

        <List
          list={players}
          title="Players"
          listComponent={PlayerCard}
          onFilter={this.filterPlayer}
          placeholder="Type the player name to filter..."
        />
      </div>
    );
  }
}
