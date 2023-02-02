import React from "react";
import "../style/css/Header.css";
const Header = () => {
	return (
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
	);
};

export default Header;
