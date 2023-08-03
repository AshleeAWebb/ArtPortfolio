import React from "react";
import '../Contact/Contact.css';
import linkedinLogo from "../../Assets/linkedin.png";
import githubLogo from "../../Assets/github.png";
import instagramLogo from "../../Assets/instagram.png";
import gmailLogo from "../../Assets/gmail.png";

const Contact = () => {
  return (
<div className="contact-page">
          <h1 className="contact-title">Contact</h1>
<section className="contact-section">
        <div className="contact-container">
          <ul className="contact-links">
             <li className="contact-li">
              <a href="mailto:ashlee.webb.18@gmail.com">
                <img className="contact-logo" src={gmailLogo} alt="Gmail" />
              </a>
                <h4 className="contact-text">Ashlee.Webb.18@gmail.com</h4>
            </li>
             <li className="contact-li">
              <a href="https://www.linkedin.com/in/ashlee-webb/" target="_blank" rel="noopener noreferrer">
                <img className="contact-logo" src={linkedinLogo} alt="LinkedIn" />
              </a>
              <h4 className="contact-text">Ashlee Webb</h4>
            </li>
             <li className="contact-li">
              <a href="https://github.com/AshleeAWebb" target="_blank" rel="noopener noreferrer">
                <img className="contact-logo" src={githubLogo} alt="GitHub" />
              </a>
              <h4 className="contact-text">AshleeAWebb</h4>
            </li>
             <li className="contact-li">
              <a href="https://www.instagram.com/ashleeaubreephotography/" target="_blank" rel="noopener noreferrer" className="instagram">
                <img className="contact-logo" src={instagramLogo} alt="Instagram" />
              </a>
              <h4 className="contact-text">Ashlee Aubree Photography</h4>
            </li>
             <li className="contact-li">
              <a href="https://www.instagram.com/ashleeaubreeart/" target="_blank" rel="noopener noreferrer" className="instagram">
                <img className="contact-logo" src={instagramLogo} alt="Instagram" />
              </a>
              <h4 className="contact-text">Ashlee Aubree Art</h4>
            </li>
          </ul>
        </div>
      </section>
  </div>
  )
}

export default Contact;
