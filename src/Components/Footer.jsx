import React from "react";
import "../style/css/Footer.css";

const Footer = () => {
	return (
		<div className="footer-container">
			<span className="copyright">Jakub Rezler &copy; 2023</span>
			<div className="footer-links-container">
				<a href="https://github.com/rezio3" target="_blank" rel="noreferrer">
					<i className="fa-brands fa-github"></i>
				</a>
				<a
					href="https://www.linkedin.com/in/jakub-rezler-7b08211ab/"
					target="_blank"
				>
					<i className="fa-brands fa-linkedin"></i>
				</a>
			</div>
		</div>
	);
};

export default Footer;
