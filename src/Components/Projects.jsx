import React, { useRef, useEffect } from "react";
import "../style/css/Projects.css";

const Projects = (props) => {
	const myRef = useRef();
	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			const entry = entries[0];
			console.log(entry.target.id);
			props.setBgColor({
				...props.bgColor,
				[entry.target.id]: entry.isIntersecting,
			});
		});
		observer.observe(myRef.current);
	}, []);

	// console.log(bgColor);
	return (
		<div className="projects-container">
			<h2 className="projects-header">Projekty</h2>
			<div ref={myRef} className="stay-alive-project-container" id="stayAlive">
				<span className="stay-alive-upper-text stay-alive-text">
					Stay Alive Boardgame
				</span>
				<span className="stay-alive-lower-text stay-alive-text">
					JS/CSS/HTML
				</span>
			</div>
		</div>
	);
};

export default Projects;
