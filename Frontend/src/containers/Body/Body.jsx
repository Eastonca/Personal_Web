import Style from "./Body.module.scss";
import About from "../About/About";
import SkillCard from "../SkillCard/SkillCard"

function Body() {
  return (
    <div className={Style.mainSec}>
      <About></About>
      <SkillCard></SkillCard>
    </div>
  );
}

export default Body;
