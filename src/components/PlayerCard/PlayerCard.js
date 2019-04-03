import React from 'react';

import './PlayerCard.css';

const PlayerCard = ({ item: player }) => {
  return (
    <div className="player-card">
      <div className="left">
        <h3 className="name">{player.player_name}</h3>
        <small>
          {player.player_type}
        </small>
      </div>
      <div className="right">
        Cards: {player.player_red_cards}/{player.player_yellow_cards}
      </div>
    </div>
  )
};

export default PlayerCard;
