import React, { Component } from 'react';

class LandingArea extends Component {
  state = {
    score: 0,
    topScore: 0,
    instructions: ''
  };

  componentDidMount() {
    this.setState({ instructions: 'Click an image to begin!' });
  }

  render() {
    return (
      <div>
        <nav className="navbar-heading">
          <ul>
            <li>
              <a href="/">NBA Clicky Game</a>
            </li>

            <li>{this.state.instructions}</li>

            <li>
              Score: {this.state.score} | Top Score: {this.state.topScore}
            </li>
          </ul>
        </nav>
        <div className="bg-img">
          <div className="img-mask">
            <div className="landing-content">
              <h1>NBA Clicky Game</h1>
              <h2>
                Click on a player to earn points, but don't click on any more
                than once!
              </h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingArea;
