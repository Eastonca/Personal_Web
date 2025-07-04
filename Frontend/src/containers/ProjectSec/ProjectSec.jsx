import React from "react";
import styles from "./ProjectSec.module.scss";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { projects } from "../../portfolio";

function ProjectSec() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Projects Showcase</h1>
      <div className={styles.cardContainer}>
        {projects.map(
          (project, i) =>
            project.enabled && <ProjectCard key={i} project={project}></ProjectCard>
        )}
      </div>
    </div>
  );
}

export default ProjectSec;
