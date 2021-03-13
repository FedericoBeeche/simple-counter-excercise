import React from "react";
import PropTypes from "prop-types";

//create your first component
export function SecondCounter(props) {
	return (
		<div className="container">
			<span className="badge badge-secondary">
				{props.digito.toString()[0]}
			</span>
			<span className="badge badge-secondary">
				{props.digito.toString()[1]}
			</span>
			<span className="badge badge-secondary">
				{props.digito.toString()[2]}
			</span>
			<span className="badge badge-secondary">
				{props.digito.toString()[3]}
			</span>
			<span className="badge badge-secondary">
				{props.digito.toString()[4]}
			</span>
			<span className="badge badge-secondary">
				{props.digito.toString()[5]}
			</span>
		</div>
	);
}

SecondCounter.propTypes = {
	digito: PropTypes.number
};
