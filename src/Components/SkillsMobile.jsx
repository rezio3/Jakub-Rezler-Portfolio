import React, { useRef, useEffect } from "react";
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
import tsImg from "../img/ts.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";

const SkillsMobile = () => {
	const myRef = useRef();
	const skill = useRef();
	gsap.registerPlugin(ScrollTrigger);
	useEffect(() => {
		gsap.from(skill, {
			scrollTrigger: {
				trigger: myRef,
				start: "top center",
				end: "200px 300px",
				scrub: 1,
			},
			y: "-200px",
			opacity: 0,
		});
		ScrollTrigger.create({
			trigger: ".about-me-skills-text",
			pin: true,
			start: "center center",
			end: "bottom center",
		});
	}, []);
	return (
		<>
			<div className="skills-container" ref={myRef}>
				<div className="skills-text-container">
					<span className="skills-text" ref={skill}>
						Co potrafię i w czym pracuję?
					</span>
				</div>
				<div className="icons-container">
					<div className="technologies-container">
						<div className="html-text skill">
							<img src={htmlImg} ref={skill} className="html-css-js-img img" />
						</div>
						<div className="css-text skill">
							<img src={cssImg} ref={skill} className="html-css-js-img img" />
						</div>
						<div className="js-text skill">
							<img src={jsImg} ref={skill} className="html-css-js-img img" />
						</div>
						<div className="express-text skill">
							<img
								src={expressImg}
								ref={skill}
								className="node-express-mongo-img img"
							/>
						</div>
						<div className="node-text skill">
							<img
								src={nodeImg}
								ref={skill}
								className="node-express-mongo-img img"
							/>
						</div>
					</div>
					<div className="technologies-container">
						<div className="react-text skill">
							<img src={reactImg} ref={skill} className="img react-img" />
						</div>

						<div className="mongodb-text skill">
							<img
								src={mongoImg}
								ref={skill}
								className="node-express-mongo-img img"
							/>
						</div>
						<div className="gimp-text skill">
							<img src={gimpImg} ref={skill} className="gimp-figma-img img" />
						</div>
						<div className="figma-text skill">
							<img src={figmaImg} ref={skill} className="gimp-figma-img img" />
						</div>
						<div className="ts-text skill">
							<img src={tsImg} ref={skill} className="img ts-img" />
						</div>
					</div>
				</div>
			</div>
			<div className="skills-lower-text-container">
				<p className="about-me-skills-text">
					Jestem samodzielny, aktywny, kreatywny, terminowy i zmotywowany do
					poszerzania wiedzy i horyzontów w świecie IT. Ponadto doskonale
					odnajduję się w pracy w zespole.
				</p>
			</div>
		</>
	);
};

export default SkillsMobile;
