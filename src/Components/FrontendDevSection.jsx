import React, { useRef, useEffect, useState } from "react";
import "../style/css/FrontendDevSection.css";

const FrontendDevSection = () => {
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
		<div ref={myRef} className="fronend-developer-section">
			<div className="front-span-container">
				<span className={anim ? "front-span front-anim txt" : "front-span txt"}>
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
			<div ref={myRef} className="with-react-span-container">
				<span
					className={
						anim ? "with-react-span with-react-anim txt" : "with-react-span txt"
					}
				>
					with React
				</span>
			</div>
		</div>
	);
};

export default FrontendDevSection;
