import React, { useState } from "react";
import "../../styles/card.css";
import Card from "./Card.jsx";

function Cards() {
	const pets = [
		{
			id: 1,
			title: "Perros",
			image:
				"https://cdn.pixabay.com/photo/2017/09/25/13/12/cocker-spaniel-2785074__340.jpg"
		},
		{
			id: 2,
			title: "Gatos",
			image:
				"https://cdn.pixabay.com/photo/2021/07/29/13/42/cat-6507259__340.jpg"
		}
	];

	return (
		<div className="container d-flex justify-content-center bg-info aling-items-center h-100">
			<div className="row">
				{pets.map((pet, index) => (
					<div className="col-md-4" key={index}>
						<Card pet={pet} />
					</div>
				))}
			</div>
		</div>
	);
}

export default Cards;
