import React from "react";
import './About.css'
import face from '../../assets/face.jpeg';

function About() {
  return (
    <div className="profileCard">
      <h1 className="greeting">Hi, I'm Easton 👋</h1>
      <h2 className="description">
        A passionate Full Stack software engineer with experience in building
        web applications using React / NodeJS / ExpressJS. Interested in
        learning / building new tech and making new connections. 
      </h2>
      <img src= {face} alt="myProfile" className="profileImg" />
      <button className="contactMeBtn">Contact Me</button>
      <button className="projectsBtn">Project Showcase</button>
      <button className="githubBtn">Github Page</button>
    </div>
  );
}

export default About;
