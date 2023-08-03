
import React, { useState } from "react";
import "./AboutMe.css";
import linkedinLogo from "../../Assets/linkedin.png";
import githubLogo from "../../Assets/github.png";
import instagramLogo from "../../Assets/instagram.png";
import gmailLogo from "../../Assets/gmail.png";


const AboutMe = () => {
  const [isBioSectionOpen, setBioSectionOpen] = useState(false);
  const [isStatementSectionOpen, setStatementSectionOpen] = useState(false);

  return (
    <div>
      {/* About Me Heading */}
      <h1>About Me</h1>

      {/* Selfie */}
      <img
        src="https://i.imgur.com/k8HEoY3.jpg"
        alt="Ash Selfie"
        style={{ width: '300px', height: 'auto' }}
      />

      {/* Introduction */}
      <h2>Unleashing Artistry in Code</h2>
      <p className="aboutMeInfo">
        I have a diverse background in Fine Arts and Naval Engineering.
        I specialize in crafting engaging and intuitive experiences that captivate users with both beauty and seamless functionality.
        With my keyboard as a brush and the digital world as my canvas, I am eager to collaborate on projects that enhance the
        online experience for everyone. Let's work together to create web "masterpieces" and make the internet a more
        captivating place for all.
      </p>

      {/* Artist Bio Section */}
      <section className="section-shape">
      <h2 onClick={() => setBioSectionOpen(!isBioSectionOpen)}>
        Artist Bio {isBioSectionOpen ? "▼" : "►"}
      </h2>
      {isBioSectionOpen && (
        <p className="aboutMeInfo">
          Is the monster under the bed simply misunderstood? Do you have to be dead to be a ghost?
          Is it isolating to believe that there is more than what meets the eye? Breakthrough the structure of the mystery
          that the world has to offer. Ashlee Aubree Webb uses photos and printmaking to explore these notions.
          Ashlee first began taking photographs while deployed with the U. S. Navy, but her hobby quickly became her passion.
          Her work mainly comprises concept-based photography and screenprints that focus on illustrating how the
          world likes to show narratives that are not always true. She enjoys working with a mixture of elaborately
          staged scenes and the spontaneous happenings of the natural world where she resides in Portsmouth, Virginia.
          She explores the view that not everything has to fit into a label.
        </p>
      )}
      </section>

      {/* Artist Statement Section */}
      <section className="section-shape">
      <h2 onClick={() => setStatementSectionOpen(!isStatementSectionOpen)}>
        Artist Statement {isStatementSectionOpen ? "▼" : "►"}
      </h2>
      {isStatementSectionOpen && (
        <p className="aboutMeInfo">
          There is an attraction to breaking the rules. My art does just that by challenging socially imposed stereotypes and
          identity issues to confront the expectations placed on individuals to live up to a narrow set of standards that can
          never be met. Not all things should fit into a mold. These works appear as surreal images that combine fiction and
          reality to gaze into the void to show the ugly truth about the social construct of unrealistic beauty standards placed
          on women daily. I use photographic images that are digitally altered and recreate them using various printmaking techniques.
          This allows me to embrace the same tools used by the mass media companies that push the narrative of the ideal woman.
          Displaying these altered images on paper enables the works to resemble the platforms that fuel the false chronicle of
          conforming to outdated expectations that place self-worth in a category of beauty and subservience.
          These scenes play into who we should be versus the person we are. My images highlight the importance of agency in our
          self-presentation, thus allowing the viewer to control how we can frame our identity. This grants the observer a glimpse
          into the beauty of nonconformity.
        </p>
      )}
      </section>

      {/* Contact Information */}
      <section className="section-shape">
      <div>
        <h2>Connect with me</h2>
        <ul className="aboutme-links">
          <li>
            <a href="mailto:ashlee.webb.18@gmail.com">
              <img className="aboutme-logo" src={gmailLogo} alt="Gmail" />
            </a>
          </li>
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
      </section>
    </div>
  );
};

export default AboutMe;
