import React, { useState } from "react";
import styles from "./About.module.scss";
import face from "../../assets/face.jpeg";

function About() {

  const handleContactClick = () => {
    window.location.href = "mailto:eastonzca@gmail.com";
  };

  const handleProjectsClick = () => {
    window.open("", "_blank");
  };

  const handleGithubClick = () => {
    window.open("https://github.com/Eastonca", "_blank");
  };


  return (
    <div className={styles.profileCard}>
      <h1 className={styles.greeting}>Hi, I'm Easton 👋</h1>
      <h2 className={styles.description}>
        A passionate Full Stack software engineer with experience in building
        web applications using React / NodeJS / ExpressJS. Interested in
        learning / building new tech and making new connections.
      </h2>
      <div className={styles.content}>
        <div className={styles.buttonsSec}>
          <button className={styles.contactMeBtn} onClick={handleContactClick}>
            Contact Me
          </button>
          <button className={styles.projectsBtn} onClick={handleProjectsClick}>
            Project Showcase
          </button>
          <button className={styles.githubBtn} onClick={handleGithubClick}>
            Github Page
          </button>
        </div>
        <img
          src={face}
          alt="Profile"
          className={styles.profileImg}
        />
      </div>
    </div>
  );
}

export default About;
