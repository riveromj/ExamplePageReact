import React from "react";
import JumboTron from "./Webpage.jsx";
import Navbar from "./Navbar.jsx";
import Cards from "./Cards.jsx";

//include images into your bundle
//create your first component
export function Home() {
	return (
		<div className="Container">
			<Navbar />
			<JumboTron />
			<Cards />
		</div>
	);
}
