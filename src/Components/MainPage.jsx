import React, { useState } from "react";
import "../style/css/MainPage.css";
import FrontendDevSection from "./FrontendDevSection";
import Header from "./Header";
import Projects from "./Projects";
import Skills from "./Skills";

const MainPage = () => {
	const [bgColor, setBgColor] = useState({
		stayAlive: false,
		cryptoCalculator: false,
		jrCompose: false,
	});

	if (bgColor.stayAlive) {
		document.body.style.background = "#beaa66";
	} else if (bgColor.stayAlive === false) {
		document.body.style.background = "rgb(11, 0, 36)";
	}

	return (
		<>
			<Header />
			<FrontendDevSection />
			<div className="divider1" />
			<Skills />
			<div className="divider2" />
			<Projects bgColor={bgColor} setBgColor={setBgColor} />
		</>
	);
};

export default MainPage;
