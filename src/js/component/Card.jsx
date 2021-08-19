import React from "react";
import PropTypes from "prop-types";

import "../../styles/card.css";

function Card(props) {
	//console.log(props);
	let image = props.pet.image;
	let category = props.pet.title;
	let descrption = props.pet.desc;
	return (
		<div className="card text-center">
			<img
				src={image}
				className="card-img-top photo"
				alt="imagen de categoria"
			/>
			<div className="card-body">
				<h5 className="card-title">{category} </h5>
				<p className="card-text">{descrption}</p>
				<a href="#!" className="btn btn-outline btn-primary round">
					Go somewhere
				</a>
			</div>
		</div>
	);
}

Card.propTypes = {
	pet: PropTypes.object.isRequired
};

export default Card;
