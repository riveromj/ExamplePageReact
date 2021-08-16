import React from "react";
import PropTypes from "prop-types";

function Card(props) {
	console.log(props);
	let image = props.pet.image;
	let category = props.pet.title;
	return (
		<div className="card text-center">
			<img
				src={image}
				className="card-img-top"
				alt="imagen de categoria"
			/>
			<div className="card-body">
				<h5 className="card-title">{category} </h5>
				<p className="card-text">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Nostrum quae minima temporibus atque molestias, esse
					quibusdam numquam repellat unde, culpa voluptatem sit ipsa
					quaerat ducimus inventore, velit magnam! Impedit, autem.
				</p>
				<a href="#!" className="btn btn-outline btn-primary round">
					Go somewhere
				</a>
			</div>
		</div>
	);
}

Card.propTypes = {
	pet: PropTypes.object
};

export default Card;
