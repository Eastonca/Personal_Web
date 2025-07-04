import React from "react";
import styles from "./SkillCard.module.scss";
import SoftwareSkill from "../../components/SoftwareSkills/SoftwareSkill";
import { skillsSection } from "../../portfolio";

function About() {
  return (
    <div className={styles.skillCard}>
      <h1 className={styles.title}>{skillsSection.title}</h1>
      <h2 className={styles.subTitle}>{skillsSection.subTitle}</h2>
      <SoftwareSkill></SoftwareSkill>
      <div>
        {skillsSection.skills.map((skills, i) => {
          return <p key={i} className={styles.skillDesc}>{skills}</p>;
        })}
      </div>
    </div>
  );
}

export default About;
