import React, { useRef, useEffect, useState } from "react";
import "../style/css/Skills.css";

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
				<span className="html-text skill">HTML5</span>
				<span className="css-text skill">CSS3/SCSS/Bootstrap</span>
				<span className="js-text skill">Javascript ES6</span>
				<span className="react-text skill">React.js</span>
				<span className="node-text skill">Node.js</span>
				<span className="express-text skill">Express.js</span>
				<span className="mongodb-text skill">MongoDB</span>
			</div>
		</div>
	);
};

export default Skills;
