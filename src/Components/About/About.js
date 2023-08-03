import React, { useState } from "react";
import "./About.css";


const About = () => {
  const [isBioSectionOpen, setBioSectionOpen] = useState(false);
  const [isStatementSectionOpen, setStatementSectionOpen] = useState(false);

  return (
    <>
    <h1>About Me</h1>
    <div class="aboutme-container">
  <div class="welcome-container">
    <div class="welcomepage-text-box">
      <h2>Hello there!</h2>
      <p>My name is Ash, and I'm a multi-talented creative professional.</p>
      <p>Whether I'm working with a paintbrush, camera or typing code, my goal is always to create exceptional experiences.</p>
      <h3>Background</h3>
      <p>With a background in Fine Arts focused in photography and printmaking, Naval Engineering, and Front-End Development, I bring a unique perspective to my work.</p>
      <h3>Education</h3>
      <p>Currently, I'm pursuing a Master's degree in User Experience Design.</p>
      <h3>Let's Collaborate!</h3>
      <p>I'd love to team up with you to turn your vision into a reality through stunning artwork or cutting-edge websites. Let's embark on this exciting adventure of artistry and technology together!</p>
    </div>
    <img src="https://i.imgur.com/k8HEoY3.jpg" alt="Ash Selfie" class="ash-selfie"/>
  </div>
</div>

      <div className="aboutme-section section-shape">
        <h2 onClick={() => setBioSectionOpen(!isBioSectionOpen)}>Artist Bio {isBioSectionOpen ? "▼" : "►"}</h2>
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
      </div>

      <div className="aboutme-section section-shape">
        <h2 onClick={() => setStatementSectionOpen(!isStatementSectionOpen)}>Artist Statement {isStatementSectionOpen ? "▼" : "►"}</h2>
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
      </div>
      </>
  );
};

export default About;
