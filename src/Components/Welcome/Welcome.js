import React from 'react';
import './Welcome.css';
import spookyLogo from '../../Assets/Spooky Logo.svg';
import gmailLogo from '../../Assets/gmail.png';

const Welcome = () => {
  return (
    <div className="welcome-container">
      <header className="welcome-header">
        <h1 className="welcome-title">Welcome to My Creative World</h1>
      </header>
      <main>
        <p className="welcomepage-text">
        I'm Ash, an artist and web developer passionate about bringing imagination to life. 
        Whether wielding a paintbrush or typing code, I create extraordinary experiences. 
        Explore the vibrant world of colors, shapes, and digital wonders. 
        </p>
        <h3 className="welcomepage-break">Have a project in mind?</h3>
        <p className="welcomepage-text">
          Let's team up and turn your vision into reality! stunning artwork or cutting-edge websites.
          <br />
          <br />
          Join me on this exciting adventure of artistry and technology!
        </p>
      </main>
    </div>
  );
};

export default Welcome;
