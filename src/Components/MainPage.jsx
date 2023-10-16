import React from "react";
import "../style/css/MainPage.css";
import Contact from "./Contact";
import Footer from "./Footer";
import FrontendDevSection from "./FrontendDevSection";
import Header from "./Header";
import Projects from "./Projects";
import Skills from "./Skills";

const MainPage = () => {
	return (
		<>
			<Header />
			<FrontendDevSection />
			<div className="divider1" />
			<Skills />
			{/* <div className="divider2" /> */}
			<Projects />
			<Contact />
			<Footer />
		</>
	);
};

export default MainPage;
