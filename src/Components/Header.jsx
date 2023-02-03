import React, { useRef, useEffect, useState } from "react";
import "../style/css/Header.css";
const Header = () => {
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
		<div ref={myRef} className="first-section">
			<div className="upper-sqrt">
				<div className={anim ? "sqrt1 sqrt1-anim" : "sqrt1"} />
				<div className={anim ? "sqrt2 sqrt2-anim" : "sqrt2"} />
			</div>
			<h2 className="jakub-rezler-header">Jakub Rezler</h2>
			<div className="lower-sqrt">
				<div className={anim ? "sqrt3 sqrt3-anim" : "sqrt3"} />
				<div className={anim ? "sqrt4 sqrt4-anim" : "sqrt4"} />
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
	);
};

export default Header;
