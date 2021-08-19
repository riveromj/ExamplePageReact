import React from "react";
import "../../styles/card.css";
import Card from "./Card.jsx";

function Cards() {
	const pets = [
		{
			id: 1,
			title: "Dogs",
			image:
				"https://cdn.pixabay.com/photo/2017/09/25/13/12/cocker-spaniel-2785074__340.jpg",
			desc:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit.	Nostrum quae minima temporibus atque molestias, esse quibusdam numquam repellat unde, culpa voluptatem sit ipsa 	quaerat ducimus inventore, velit magnam! Impedit, autem."
		},
		{
			id: 2,
			title: "Cats",
			image:
				"https://cdn.pixabay.com/photo/2021/07/29/13/42/cat-6507259__340.jpg",
			desc:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit.	Nostrum quae minima temporibus atque molestias, esse quibusdam numquam repellat unde, culpa voluptatem sit ipsa 	quaerat ducimus inventore, velit magnam! Impedit, autem."
		},
		{
			id: 3,
			title: "Rabbits",
			image:
				"https://cdn.pixabay.com/photo/2020/04/07/20/36/bunny-5014814__340.jpg",
			desc:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit.	Nostrum quae minima temporibus atque molestias, esse quibusdam numquam repellat unde, culpa voluptatem sit ipsa 	quaerat ducimus inventore, velit magnam! Impedit, autem."
		},
		{
			id: 4,
			title: "Sea World",
			image:
				"https://cdn.pixabay.com/photo/2014/06/30/08/02/zitronenfalter-fish-380037__340.jpg",
			desc:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit.	Nostrum quae minima temporibus atque molestias, esse quibusdam numquam repellat unde, culpa voluptatem sit ipsa 	quaerat ducimus inventore, velit magnam! Impedit, autem."
		}
	];

	return (
		<div className="container d-flex justify-content-center h-100 aling-items-center">
			<div className="row">
				{pets.map((pet, index) => (
					<div className="col-md-4 col-sm-2 align" key={index}>
						<Card pet={pet} />
					</div>
				))}
			</div>
		</div>
	);
}

export default Cards;
