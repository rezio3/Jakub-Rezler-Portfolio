import React from "react";
import "../style/css/Lines.css";
import Media from "react-media";

const Lines = () => {
	return (
		<div className="lines">
			<Media query="(min-width: 992px)">
				{(matches) => {
					return matches ? (
						<>
							<div className="vertical-line"></div>
							<div className="vertical-line"></div>
							<div className="vertical-line"></div>
							<div className="vertical-line"></div>
							<div className="vertical-line"></div>
						</>
					) : (
						<>
							<div className="vertical-line"></div>
							<div className="vertical-line"></div>
							<div className="vertical-line"></div>
						</>
					);
				}}
			</Media>
		</div>
	);
};

export default Lines;
