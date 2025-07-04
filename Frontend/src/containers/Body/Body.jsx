import Style from "./Body.module.scss";
import About from "../About/About";
import SkillCard from "../SkillCard/SkillCard"
import Education from "../Education/Education"
import ProjectSec from "../ProjectSec/ProjectSec";

function Body() {
  return (
    <div className={Style.mainSec}>
      <About></About>
      <SkillCard></SkillCard>
      <Education></Education>
      <ProjectSec></ProjectSec>
    </div>
  );
}

export default Body;
