import React from "react";
import styles from "./SoftwareSkill.module.scss";
import { skillsSection } from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div className={styles.softwareSkillsMainDiv}>
      <ul className={styles.devIcons}>
        {skillsSection.softwareSkills.map((skill, i) => (
          <li
            key={i}
            className={styles.softwareSkillInline}
            name={skill.skillName}
          >
            {skill.fontAwesomeClassname ? (
              <i className={skill.fontAwesomeClassname}></i>
            ) : (
              <img src={skill.src} className={styles.skillIconImage} />
            )}
            <p>{skill.skillName}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
