import React, { Component } from 'react';
import LandingArea from './components/landing_area';
import PlayerCard from './components/player_card';
import Footer from './components/footer';
import players from './players.json';

class App extends Component {
  state = { players };

  shufflePlayers = () => {
    let currentIndex = players.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = players[currentIndex];
      players[currentIndex] = players[randomIndex];
      players[randomIndex] = temporaryValue;
    }

    this.setState({ players });
  };

  render() {
    return (
      <div>
        <LandingArea />
        <div className="container">
          <div className="row">
            {this.state.players.map(player => (
              <PlayerCard
                id={player.id}
                key={player.name}
                image={player.image}
              />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
