import React from 'react';
import Logo from '.././logo.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="bottom">
        Clicky Game!
        <img src={Logo} alt="logo" />
      </div>
    </footer>
  );
};

export default Footer;
