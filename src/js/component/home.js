import React from "react";
import PropTypes from "prop-types";

//create your first component
export function SecondCounter(props) {
	return (
		<div className="container">

			<i className="iconoReloj fa fa-clock"></i>
			<div className="digitoCuatro">{props.numeroCuatro % 10}</div>
			<div className="digitoTres">{props.numeroTres % 10}</div>
			<div className="digitoDos">{props.numeroDos % 10}</div>
			<div className="digitoUno">{props.numeroUno % 10}</div>
    
		</div>
	);
}

SecondCounter.propTypes = {
	numeroCuatro: PropTypes.number,
	numeroTres: PropTypes.number,
	numeroDos: PropTypes.number,
	numeroUno: PropTypes.number
};
