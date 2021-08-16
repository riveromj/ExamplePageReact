import React from "react";
import JumboTron from "./Webpage.jsx";
import Navbar from "./Navbar.jsx";
import Cards from "./Cards.jsx";

//include images into your bundle
//create your first component
export function Home() {
	return (
		<div>
			<Navbar />
			<div className="Container">
				<JumboTron />
				{/* <div className="row">
					<Cards />
				</div> */}
				<Cards />
			</div>
		</div>
	);
}
