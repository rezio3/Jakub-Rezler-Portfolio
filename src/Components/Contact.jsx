import React from "react";
import "../style/css/Contact.css";
import Media from "react-media";

const Contact = () => {
	return (
		<div className="contact-container">
			<Media query="(min-width: 992px)">
				{(matches) => {
					return matches ? (
						<span className="contact-span">
							Masz pytania lub chcesz <br />
							nawiązać współpracę?
						</span>
					) : (
						<span className="contact-span">
							Masz pytania lub chcesz nawiązać współpracę?
						</span>
					);
				}}
			</Media>
			<br />
			<a href="mailto:jakub.rezler96@gmail.com">
				<button className="text-me-button">Odezwij się</button>
			</a>
		</div>
	);
};

export default Contact;
