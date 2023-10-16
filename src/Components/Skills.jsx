import React from "react";
import Media from "react-media";
import "../style/css/Skills.css";
import "../style/css/SkillsAnim.css";
import SkillsDesktop from "./SkillsDesktop";
import SkillsMobile from "./SkillsMobile";

const Skills = () => {
	return (
		<Media query="(min-width: 992px)">
			{(matches) => {
				return matches ? <SkillsDesktop /> : <SkillsMobile />;
			}}
		</Media>
	);
};

export default Skills;
