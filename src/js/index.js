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
	counter++;
	console.log(counter);
	ReactDOM.render(
		<SecondCounter digito={counter} />,
		document.querySelector("#app")
	);
}, 50);
