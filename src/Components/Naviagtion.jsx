import React from "react";
import "../style/css/Navigation.css";

const Navigation = () => {
	return (
		<div className="navbar">
			<h1 className="portfolio-header-text">Portfolio</h1>
			<div className="nav-links">
				<button className="nav-button">O mnie</button>
				<button className="nav-button">Projekty</button>
				<button className="nav-button">Kontakt</button>
			</div>
		</div>
	);
};

export default Navigation;
