import React, { useState } from "react";
import styles from "./ProjectCard.module.scss";
import enlargeIcon from "../../assets/enlarge.png";

export default function ProjectCard({ project }) {
  const { name, visuals, link, github, toolsUsed, description } = project;

  const [hoveredVisual, setHoveredVisual] = useState(null);

  return (
    <>
      <div className={styles.container}>
        {name && <p className={styles.name}>{name}</p>}

        {visuals &&
          visuals.map((visual, i) => (
            <div className={styles.imageSec} key={i}>
              <img src={visual} alt="" className={styles.visual} />
              <img
                src={enlargeIcon}
                alt="Enlarge"
                className={styles.enlargeIcon}
                onMouseEnter={() => setHoveredVisual(visual)}
                onMouseLeave={() => setHoveredVisual(null)}
              />
            </div>
          ))}

        <div className={styles.links}>
          {link && (
            <a href={link} target="_blank" rel="noreferrer">
              Project Page
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noreferrer">
              Github Page
            </a>
          )}
        </div>
        {toolsUsed && <p className={styles.toolsUsed}>Tools: {toolsUsed}</p>}
        {description && (
          <ul className={styles.description}>
            {description.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        )}
      </div>

      {hoveredVisual && (
        <div className={styles.previewOverlay}>
          <img src={hoveredVisual} alt="" className={styles.largeVisual} />
        </div>
      )}
    </>
  );
}
