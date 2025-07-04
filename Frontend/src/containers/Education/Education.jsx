import React from "react";
import styles from "./Education.module.scss";
import { education } from "../../portfolio";

function Education() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Education</h1>
      {education.schools.map(
        (school, i) =>
          school.enabled && (
            <div className={styles.card} key={i}>
              <img className={styles.schoolLogo} src={school.logo} alt="logo" />
              <div className={styles.schoolName}>{school.schoolName}</div>
              <div className={styles.major}>{school.major}</div>
              <div className={styles.time}>{school.time}</div>
              {/* <div className={styles.description}>{school.description}</div> */}
            </div>
          )
      )}
    </div>
  );
}

export default Education;
