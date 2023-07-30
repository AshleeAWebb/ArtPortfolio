import React from 'react';
import './Welcome.css';
import spookyLogo from '../../Assets/Spooky Logo.svg';

const Welcome = () => {
  return (
    <div className="welcome-container">
      <h1 className="welcome-title">Welcome to My Creative World! 🎨🌐</h1>
      <p className='welcomepage-text'>I'm Ash, an artist and web developer on a journey to bring imagination to life.<br></br>
Whether I'm wielding a paintbrush or typing lines of code, I'm always thrilled to create something extraordinary.<br></br>
Feel free to take a look around and explore the vibrant world of colors, shapes, and digital wonders.<br></br>
</p> 
<h3 className='welcomepage-break'>Have a project in mind?</h3>
<p className='welcomepage-text'>
 Let's team up and turn your vision into reality! Whether it's a stunning artwork that speaks to the 
heart or a cutting-edge website that leaves a lasting impression, I'm here to make it happen.<br></br>
<br></br>
Join me on this exciting adventure of artistry and technology!<br></br>
</p>

    </div>
  );
};

export default Welcome;

