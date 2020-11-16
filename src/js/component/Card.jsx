import React from "react";
import "../../styles/card.css";

function Card() {
	return (
		<div className="card">
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">hola</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
}

export default Card;
