import React, { Component } from 'react';
import LandingArea from './components/landing_area';
import PlayerCard from './components/player_card';
import Footer from './components/footer';
import players from './players.json';

class App extends Component {
  state = {
    players: players,
    score: 0,
    topScore: 0,
    instructions: '',
    guessedPlayers: []
  };

  componentDidMount() {
    this.setState({ instructions: 'Click an image to begin!' });
  }

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

  handleIncrementScore = event => {
    const guessedPlayer = event.target.key;
    console.log(guessedPlayer);

    if (this.state.guessedPlayers.includes(guessedPlayer)) {
      let instructions = this.state.instructions;
      instructions = 'You guessed incorrect!';
      const score = 0;
      this.setState({ instructions });
      this.setState({ score });
    }

    let score = this.state.score;
    score = score + 1;

    let topScore = this.state.topScore;
    topScore = topScore + 1;

    this.setState({
      topScore: topScore,
      score: score,
      guessedPlayers: guessedPlayer
    });
  };

  render() {
    return (
      <div>
        <LandingArea
          score={this.state.score}
          topScore={this.state.topScore}
          instructions={this.state.instructions}
        />
        <div className="container">
          <div className="row">
            {this.state.players.map(player => (
              <PlayerCard
                shufflePlayers={this.shufflePlayers}
                handleIncrementScore={this.handleIncrementScore}
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
