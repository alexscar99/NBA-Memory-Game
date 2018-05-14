import React from 'react';

const LandingArea = ({ instructions, topScore, score }) => {
  return (
    <div>
      <nav className="navbar-heading">
        <ul>
          <li>
            <a href="/">NBA Clicky Game</a>
          </li>

          <li>{instructions}</li>

          <li>
            Score: {score} | Top Score: {topScore}
          </li>
        </ul>
      </nav>
      <div className="bg-img">
        <div className="img-mask">
          <div className="landing-content">
            <h1>NBA Clicky Game</h1>
            <h2>
              Click on a player to earn points, but don't click on any more than
              once!
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingArea;
