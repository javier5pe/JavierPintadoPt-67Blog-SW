import React from "react";
import "../../styles/home.css";
import Personajes from "./Personajes";
import Vehiculos from "./Vehiculos";
import Planetas from "./Planetas";

export const Home = () => (
	<div className="text-center mt-5">
		<Personajes/>
		<Vehiculos/>
		<Planetas/>
	</div>
);
