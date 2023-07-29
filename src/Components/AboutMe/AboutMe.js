import React from "react";
import "../AboutMe/AboutMe.css";
import linkedinLogo from "../../Assets/linkedin.png";
import githubLogo from "../../Assets/github.png";
import instagramLogo from "../../Assets/instagram.png";

const AboutMe = () => {
  return (
    <div>
      <h1>About Me</h1>
      <img src="https://i.imgur.com/k8HEoY3.jpg" alt="Ash Selfie" style={{ width: '300px', height: 'auto' }} />
      <p>
        A passionate web developer and designer with an unwavering love for crafting
        captivating and immersive digital experiences. With a diverse background in Fine Arts
        and Naval Engineering, I've honed the art of transforming visionary concepts
        into stunning realities through the power of code.
      </p>
      <h2>Unleashing Artistry in Code</h2>
      <p>
        My journey as a developer is fueled by a passion for creating web masterpieces that not
        only mesmerize with their beauty but also enthrall users with seamless functionality. My
        canvas is the digital realm, and my brush is a keyboard - together they weave magic,
        bringing visions to life and making the web a more delightful place for all.
      </p>
      <h2> Artist Statment </h2>
      <div>
        <h2>Connect with me</h2>
        <ul className="aboutme-links">
          <li>
            <a href="https://www.linkedin.com/in/ashlee-webb/" target="_blank" rel="noopener noreferrer">
              <img className="aboutme-logo" src={linkedinLogo} alt="LinkedIn" />
            </a>
          </li>
          <li>
            <a href="https://github.com/AshleeAWebb" target="_blank" rel="noopener noreferrer">
              <img className="aboutme-logo" src={githubLogo} alt="GitHub" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/ashleeaubreephotography/" target="_blank" rel="noopener noreferrer" className="instagram">
              <span className="camera-logo" role="img" aria-label="Camera Emoji">📷 </span>
              <img className="aboutme-logo" src={instagramLogo} alt="Instagram" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/ashleeaubreeart/" target="_blank" rel="noopener noreferrer" className="instagram">
              <span className="emoji-logo" role="img" aria-label="Paint Palette Emoji">🎨 </span>
              <img className="aboutme-logo" src={instagramLogo} alt="Instagram" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;

