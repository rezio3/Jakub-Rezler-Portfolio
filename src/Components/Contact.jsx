import React from "react";
import "../style/css/Contact.css";

const Contact = () => {
	return (
		<div className="contact-container">
			<span className="contact-span">
				Masz pytania lub chcesz <br />
				nawiązać współpracę?
			</span>
			<br />
			<a href="mailto:jakub.rezler96@gmail.com">
				<button className="text-me-button">Odezwij się</button>
			</a>
		</div>
	);
};

export default Contact;
