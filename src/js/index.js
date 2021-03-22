//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { SecondCounter } from "./component/home.js";

//render your react application
let counter = 0;

setInterval(function() {
	var numCuatro = Math.floor(counter / 10000);
	var numTres = Math.floor(counter / 1000);
	var numDos = Math.floor(counter / 100);
	var numUno = Math.floor(counter / 10);

	counter++;
	console.log(counter);
	ReactDOM.render(
		<SecondCounter
			numeroUno={numUno}
			numeroDos={numDos}
			numeroTres={numTres}
			numeroCuatro={numCuatro}
		/>,
		document.querySelector("#app")
	);
}, 100);

