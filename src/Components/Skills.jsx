import React, { useRef, useEffect, useState } from "react";
import Media from "react-media";
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
		<Media query="(min-width: 992px)">
			{(matches) => {
				return matches ? (
					// desktop
					<>
						<div ref={myRef} className="skills-container">
							<div className="skills-text-container">
								<span
									className={
										anim ? "skills-text skills-text-anim" : "skills-text"
									}
								>
									Co potrafię i w czym pracuję?
								</span>
							</div>
							<div className="technologies-container">
								<div className="html-text skill">
									<img
										src={htmlImg}
										className={
											anim
												? "html-css-js-img img html-img"
												: "html-css-js-img img"
										}
									/>
								</div>
								<div className="css-text skill">
									<img
										src={cssImg}
										className={
											anim
												? "html-css-js-img img css-img"
												: "html-css-js-img img"
										}
									/>
								</div>
								<div className="js-text skill">
									<img
										src={jsImg}
										className={
											anim
												? "html-css-js-img img js-img"
												: "html-css-js-img img"
										}
									/>
								</div>
								<div className="react-text skill">
									<img
										src={reactImg}
										className={
											anim ? "img react-img react-img-anim" : "img react-img"
										}
									/>
								</div>
								<div className="node-text skill">
									<img
										src={nodeImg}
										className={
											anim
												? "node-express-mongo-img img node-img"
												: "node-express-mongo-img img"
										}
									/>
								</div>
							</div>
							<div className="technologies-container">
								<div className="express-text skill">
									<img
										src={expressImg}
										className={
											anim
												? "node-express-mongo-img img express-img"
												: "node-express-mongo-img img"
										}
									/>
								</div>
								<div className="mongodb-text skill">
									<img
										src={mongoImg}
										className={
											anim
												? "node-express-mongo-img img mongo-img"
												: "node-express-mongo-img img"
										}
									/>
								</div>
								<div className="gimp-text skill">
									<img
										src={gimpImg}
										className={
											anim
												? "gimp-figma-img img gimp-img"
												: "gimp-figma-img img"
										}
									/>
								</div>
								<div className="figma-text skill">
									<img
										src={figmaImg}
										className={
											anim
												? "gimp-figma-img img figma-img"
												: "gimp-figma-img img"
										}
									/>
								</div>
								<div className="ts-text skill">
									<img
										src={tsImg}
										className={anim ? "img ts-img ts-img-anim" : "img ts-img"}
									/>
								</div>
							</div>
						</div>
						<div className="skills-lower-text-container">
							<p className="about-me-skills-text">
								Jestem samodzielny, aktywny, kreatywny, terminowy i zmotywowany
								do poszerzania wiedzy i horyzontów w świecie IT. Ponadto
								doskonale odnajduję się w pracy w zespole.
							</p>
						</div>
					</>
				) : (
					// mobile
					<>
						<div ref={myRef} className="skills-container">
							<div className="skills-text-container">
								<span
									className={
										anim ? "skills-text skills-text-anim" : "skills-text"
									}
								>
									Co potrafię i w czym pracuję?
								</span>
							</div>
							<div className="icons-container">
								<div className="technologies-container">
									<div className="html-text skill">
										<img
											src={htmlImg}
											className={
												anim
													? "html-css-js-img img html-img"
													: "html-css-js-img img"
											}
										/>
									</div>
									<div className="css-text skill">
										<img
											src={cssImg}
											className={
												anim
													? "html-css-js-img img css-img"
													: "html-css-js-img img"
											}
										/>
									</div>
									<div className="js-text skill">
										<img
											src={jsImg}
											className={
												anim
													? "html-css-js-img img js-img"
													: "html-css-js-img img"
											}
										/>
									</div>
									<div className="express-text skill">
										<img
											src={expressImg}
											className={
												anim
													? "node-express-mongo-img img express-img"
													: "node-express-mongo-img img"
											}
										/>
									</div>
									<div className="node-text skill">
										<img
											src={nodeImg}
											className={
												anim
													? "node-express-mongo-img img node-img"
													: "node-express-mongo-img img"
											}
										/>
									</div>
								</div>
								<div className="technologies-container">
									<div className="react-text skill">
										<img
											src={reactImg}
											className={
												anim ? "img react-img react-img-anim" : "img react-img"
											}
										/>
									</div>

									<div className="mongodb-text skill">
										<img
											src={mongoImg}
											className={
												anim
													? "node-express-mongo-img img mongo-img"
													: "node-express-mongo-img img"
											}
										/>
									</div>
									<div className="gimp-text skill">
										<img
											src={gimpImg}
											className={
												anim
													? "gimp-figma-img img gimp-img"
													: "gimp-figma-img img"
											}
										/>
									</div>
									<div className="figma-text skill">
										<img
											src={figmaImg}
											className={
												anim
													? "gimp-figma-img img figma-img"
													: "gimp-figma-img img"
											}
										/>
									</div>
									<div className="ts-text skill">
										<img
											src={tsImg}
											className={anim ? "img ts-img ts-img-anim" : "img ts-img"}
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="skills-lower-text-container">
							<p className="about-me-skills-text">
								Jestem samodzielny, aktywny, kreatywny, terminowy i zmotywowany
								do poszerzania wiedzy i horyzontów w świecie IT. Ponadto
								doskonale odnajduję się w pracy w zespole.
							</p>
						</div>
					</>
				);
			}}
		</Media>
	);
};

export default Skills;
