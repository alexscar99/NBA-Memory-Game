import React, { Component } from 'react';

class PlayerCard extends Component {
  onClick = event => {
    this.props.handleIncrementScore(event);
    this.props.shufflePlayers();
  };

  render() {
    return (
      <div className="card" onClick={this.onClick}>
        <div className="img-container">
          <img alt={this.props.name} src={this.props.image} />
        </div>
      </div>
    );
  }
}

export default PlayerCard;
