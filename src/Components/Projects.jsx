import React, { useRef, useEffect } from "react";
import "../style/css/Projects.css";

const Projects = () => {
	const projectsRef = useRef();
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const entry = entries[0];
				// console.log("góra" + entry.intersectionRatio);
				if (entry.target.id === "projects" && entry.isIntersecting) {
					document.body.style.background = "rgb(11, 0, 36)";
				}
			},
			{ threshold: 0.9 }
		);
		observer.observe(projectsRef.current);
	}, []);
	const stayAliveRef = useRef();
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const entry = entries[0];
				console.log("stayAlive" + entry.intersectionRatio);
				if (entry.target.id === "stayAlive" && entry.isIntersecting) {
					document.body.style.background = "rgb(68, 44, 0)";
				}
			},
			{ threshold: 0.9 }
		);
		observer.observe(stayAliveRef.current);
	}, []);
	const cryptoRef = useRef();
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const entry = entries[0];
				// console.log("Crypto" + entry.intersectionRatio);
				if (entry.target.id === "cryptoCalculator" && entry.isIntersecting) {
					document.body.style.background = "#beaa66";
				}
			},
			{ threshold: 0.9 }
		);
		observer.observe(cryptoRef.current);
	}, []);
	const jrComposeRef = useRef();
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const entry = entries[0];
				// console.log("jrCompose" + entry.intersectionRatio);
				if (entry.target.id === "jrCompose" && entry.isIntersecting) {
					document.body.style.background = "rgb(85, 85, 105)";
				}
			},
			{ threshold: 0.9 }
		);
		observer.observe(jrComposeRef.current);
	}, []);
	const dagmarRef = useRef();
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const entry = entries[0];
				// console.log("dagmar" + entry.intersectionRatio);
				if (entry.target.id === "dagmar" && entry.isIntersecting) {
					document.body.style.background = "rgb(146, 0, 0)";
				}
			},
			{ threshold: 0.9 }
		);
		observer.observe(dagmarRef.current);
	}, []);
	const bestsetupRef = useRef();
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const entry = entries[0];
				if (entry.target.id === "bestsetup" && entry.isIntersecting) {
					document.body.style.background = "rgb(39,126,193)";
				}
			},
			{ threshold: 0.9 }
		);
		observer.observe(bestsetupRef.current);
	}, []);
	const hwRef = useRef();
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const entry = entries[0];
				// console.log("hw" + entry.intersectionRatio);
				if (entry.target.id === "hw" && entry.isIntersecting) {
					document.body.style.background = "rgb(59, 59, 59)";
				}
			},
			{ threshold: 0.9 }
		);
		observer.observe(hwRef.current);
	}, []);
	const mainColorlRef = useRef();
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				const entry = entries[0];
				console.log("dół" + entry.intersectionRatio);
				if (entry.target.id === "mainColor" && entry.isIntersecting) {
					document.body.style.background = "rgb(11, 0, 36)";
				}
			},
			{ threshold: 0.9 }
		);
		observer.observe(mainColorlRef.current);
	}, []);
	// document.body.style.background = "rgb(11, 0, 36)";
	return (
		<div className="projects-container">
			<h2 ref={projectsRef} className="projects-header" id="projects">
				Projekty
			</h2>
			<a
				href="https://rezio3.github.io/dag-mar-website/"
				target="_blank"
				rel="noreferrer"
			>
				<div
					ref={dagmarRef}
					className="dagmar-project-container single-project-container"
					id="dagmar"
				>
					<span className="upper-text dagmar-text">
						Biuro Tłumaczeń <br />
						DAG-MAR
					</span>
					<span className="lower-text dagmar-text">React</span>
				</div>
			</a>
			<div className="project-divider" />
			<a
				href="https://rezio3.github.io/best-setup-online-shop/"
				target="_blank"
				rel="noreferrer"
			>
				<div
					ref={bestsetupRef}
					className="bestsetup-project-container single-project-container"
					id="bestsetup"
				>
					<span className="upper-text bestsetup-text">BestSetup</span>
					<span className="lower-text bestsetup-text">
						online shop <br />
						with computer <br />
						equipment <br />
						Desktop version / React
					</span>
				</div>
			</a>
			<div className="project-divider" />
			<a
				href="https://rezio3.github.io/hw-music-production/"
				target="_blank"
				rel="noreferrer"
			>
				<div
					ref={hwRef}
					className="hw-project-container single-project-container"
					id="hw"
				>
					<span className="upper-text hw-text">HW Music Production</span>
					<span className="lower-text hw-text">
						Desktop version <br />
						React
					</span>
				</div>
			</a>
			<div className="project-divider" />
			<a
				href="https://rezio3.github.io/JR-Compose-Website/"
				target="_blank"
				rel="noreferrer"
			>
				<div
					ref={jrComposeRef}
					className="jrCompose-project-container single-project-container"
					id="jrCompose"
				>
					<span className="upper-text text">JRCompose</span>
					<span className="upper-text text">Composer website</span>
					<span className="lower-text text">React</span>
				</div>
			</a>
			<div className="project-divider" />
			<a
				href="https://stayaliveboardgame.prv.pl/"
				target="_blank"
				rel="noreferrer"
			>
				<div
					ref={stayAliveRef}
					className="stay-alive-project-container single-project-container"
					id="stayAlive"
				>
					<span className="upper-text text stay-alive-text">
						Stay Alive Boardgame
					</span>
					<span className="lower-text text stay-alive-text">
						Desktop version <br />
						Pure JS/React version in progress...
					</span>
				</div>
			</a>
			<div className="project-divider" />
			<a
				href="https://rezio3.github.io/crypto-calculator/"
				target="_blank"
				rel="noreferrer"
			>
				<div
					ref={cryptoRef}
					className="crypto-project-container single-project-container"
					id="cryptoCalculator"
				>
					<span className="upper-text text">Crypto Calculator</span>
					<span className="lower-text text">React</span>
				</div>
			</a>

			<div className="project-divider2" />
			<div ref={mainColorlRef} id="mainColor" />
		</div>
	);
};

export default Projects;
