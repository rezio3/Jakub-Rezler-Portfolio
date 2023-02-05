import React from "react";
import "../style/css/Navigation.css";

const Navigation = () => {
	return (
		<div className="navbar">
			<h1 className="portfolio-header-text">Portfolio</h1>
			<div className="nav-links">
				<a href="https://github.com/rezio3" target="_blank">
					<button className="nav-button">Github</button>
				</a>
				<a href="mailto:jakub.rezler96@gmail.com">
					<button className="nav-button">Kontakt</button>
				</a>
			</div>
		</div>
	);
};

export default Navigation;
