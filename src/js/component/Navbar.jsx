import React from "react";
import "../../styles/navbarStyle.css";

function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg ">
			<a className="navbar-brand " href="#">
				Bootatrap
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNavAltMarkup"
				aria-controls="navbarNavAltMarkup"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>
			<div
				className="collapse navbar-collapse justify-content-end"
				id="navbarNavAltMarkup">
				<div className="navbar-nav  ">
					<a className="nav-link active menu " href="#">
						Home <span className="sr-only">(current)</span>
					</a>
					<a
						className="nav-link disabled"
						href="#"
						tabIndex="-1"
						aria-disabled="true">
						About
					</a>
					<a
						className="nav-link disabled"
						href="#"
						tabIndex="-1"
						aria-disabled="true">
						Services
					</a>
					<a
						className="nav-link disabled"
						href="#"
						tabIndex="-1"
						aria-disabled="true">
						Contact
					</a>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
