import React from 'react';

const LandingArea = ({ instructions, topScore, score }) => {
  return (
    <div>
      <nav className="navbar-heading">
        <ul>
          <li>
            <a href="/">NBA Memory Game</a>
          </li>

          <li className="display-msg">{instructions}</li>

          <li>
            Score: {score} &lt;&gt; High Score: {topScore}
          </li>
        </ul>
      </nav>
      <div className="bg-img">
        <div className="img-mask">
          <div className="landing-content">
            <h1>NBA Memory Game</h1>
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
