import React, { Component } from 'react';
import { fetchFavoriteTeams, setFavoriteTeam } from '../../services/Api';
import { getSession } from '../../services/Storage';

export default class FavoriteToggle extends Component {
  state = {
    isFavorite: false,
    token: getSession(),
  };

  componentDidMount () {
    if (!this.state.token) {
      return;
    }

    fetchFavoriteTeams(this.state.token)
      .then(response => this.setState({
        isFavorite: response.favoriteTeams.indexOf(this.props.teamId) >= 0,
      }));
  }

  toggleFavorite = () => {
    setFavoriteTeam(this.props.teamId, this.state.token)
      .then(response => this.setState({
        isFavorite: response.favoriteTeams.indexOf(this.props.teamId) >= 0,
      }));
  }

  render () {
    const {
      token,
      isFavorite,
    } = this.state;

    if (!token) {
      return null;
    }

    return (
      <button onClick={this.toggleFavorite}>
        {isFavorite ? 'Remove favorite' : 'Add to favorite'}
      </button>
    );
  }
}
