import React from 'react';

const PlayerCard = props => (
  <div className="card" onClick={() => props.shufflePlayers(props.id)}>
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default PlayerCard;
