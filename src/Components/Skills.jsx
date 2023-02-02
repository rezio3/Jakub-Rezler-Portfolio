import React, { useRef, useEffect, useState } from "react";
import "../style/css/Skills.css";
import "../style/css/SkillsAnim.css";
import htmlImg from "../img/html.png";
import cssImg from "../img/css.png";
import jsImg from "../img/js.png";
import reactImg from "../img/react.png";
import nodeImg from "../img/node.png";
import expressImg from "../img/express.png";
import mongoImg from "../img/mongo.png";
import gimpImg from "../img/gimp.png";
import figmaImg from "../img/figma.png";

const Skills = () => {
	const [anim, setAnim] = useState(false);
	const myRef = useRef();
	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			const entry = entries[0];
			setAnim(entry.isIntersecting);
		});
		observer.observe(myRef.current);
	}, []);
	return (
		<div ref={myRef} className="skills-container">
			<div className="skills-text-container">
				<span className={anim ? "skills-text skills-text-anim" : "skills-text"}>
					Co potrafię i w czym pracuję?
				</span>
			</div>
			<div className="technologies-container">
				<div className="html-text skill">
					<img src={htmlImg} className="html-css-js-img" />
				</div>
				<div className="css-text skill">
					<img src={cssImg} className="html-css-js-img" />
				</div>
				<div className="js-text skill">
					<img src={jsImg} className="html-css-js-img" />
				</div>
				<div className="react-text skill">
					<img src={reactImg} className="react-img" />
				</div>
				<div className="node-text skill">
					<img src={nodeImg} className="node-express-mongo-img" />
				</div>
				<div className="express-text skill">
					<img src={expressImg} className="node-express-mongo-img" />
				</div>
				<div className="mongodb-text skill">
					<img src={mongoImg} className="node-express-mongo-img" />
				</div>
				<div className="gimp-text skill">
					<img src={gimpImg} className="gimp-figma-img" />
				</div>
				<div className="figma-text skill">
					<img src={figmaImg} className="gimp-figma-img" />
				</div>
			</div>
		</div>
	);
};

export default Skills;
