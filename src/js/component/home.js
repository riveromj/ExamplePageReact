import React from "react";
import JumboTron from "./Webpage.jsx";
import Navbar from "./Navbar.jsx";
import Card from "./Card.jsx";

//include images into your bundle
//create your first component
export function Home() {
	return (
		<div>
			<Navbar />
			<div className="Container">
				<JumboTron />
				<div className="row">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</div>
	);
}
