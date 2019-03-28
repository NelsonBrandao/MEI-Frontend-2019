import React from 'react';
import './TeamCard.css';

const TeamCard = ({ team }) => {
  return (
    <div className="team-card">
      <img src={team.team_logo} alt={team.team_name} />
      <h2>
        {team.team_name}
      </h2>
    </div>
  );
}

export default TeamCard;
