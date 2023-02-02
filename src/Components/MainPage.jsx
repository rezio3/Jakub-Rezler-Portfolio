import React, { useRef, useEffect, useState } from "react";
import "../style/css/MainPage.css";

const MainPage = () => {
	const myRef = useRef();
	const [anim, setAnim] = useState();
	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			const entry = entries[0];
			setAnim(entry.isIntersecting);
		});
		observer.observe(myRef.current);
	}, []);
	return (
		<>
			<div className="first-section">
				<div className="upper-sqrt">
					<div className="sqrt1" />
					<div className="sqrt2" />
				</div>
				<h2 className="jakub-rezler-header">Jakub Rezler</h2>
				<div className="lower-sqrt">
					<div className="sqrt3" />
					<div className="sqrt4" />
				</div>
				<div className="about-me-text-container">
					<p className="about-me-text">
						Cześć! Jestem Kuba i zajmuję się tworzeniem{" "}
						<span className="white-text">aplikacji webowych</span>. Duży nacisk
						kładę na{" "}
						<span className="white-text">
							samorozwój i poszerzanie horyzontów
						</span>
						. Bugi nie trzymają się mojego kodu, trzyma się go{" "}
						<span className="white-text">pasja i rzetelność</span>.
					</p>
				</div>
			</div>
			<div ref={myRef} className="fronend-developer-section">
				<div className="front-span-container">
					<span
						className={anim ? "front-span front-anim txt" : "front-span txt"}
					>
						front
					</span>
				</div>
				<div className="end-span-container">
					<span className={anim ? "end-span end-anim txt" : "end-span txt"}>
						end
					</span>
				</div>
				<div className="developer-span-container">
					<span
						className={
							anim ? "developer-span developer-anim txt" : "developer-span txt"
						}
					>
						developer
					</span>
				</div>
				<div className="with-react-span-container">
					<span
						className={
							anim
								? "with-react-span with-react-anim txt"
								: "with-react-span txt"
						}
					>
						with React
					</span>
				</div>
			</div>
		</>
	);
};

export default MainPage;
