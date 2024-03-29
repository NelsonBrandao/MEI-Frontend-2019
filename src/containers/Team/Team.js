import React, { Component } from 'react';
import List from '../../components/List/List';
import { fetchTeam, setFavoriteTeam } from '../../services/Api';
import TeamCard from '../../components/TeamCard/TeamCard';
import PlayerCard from '../../components/PlayerCard/PlayerCard';

import './Team.css';
import FavoriteToggle from '../FavoriteToggle/FavoriteToggle';

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
      loading
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

        <FavoriteToggle
          teamId={this.props.match.params.id}
        />

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
