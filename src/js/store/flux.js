import Vehiculos from "../views/Vehiculos";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			personajes: [],
			vehiculos: [],
			planetas: [],
			favoritos: [],
			
		},
		actions: {

			addFavoritos: (nombreFav) => {
				const store = getStore();
				if (store.favoritos.includes(nombreFav)){
					setStore({favoritos:store.favoritos.filter((repetido)=> repetido != nombreFav)});
				} else {
					setStore({favoritos:[...store.favoritos,nombreFav]});
				}
			},

			traerPersonajes: () => {
				fetch ("https://swapi.dev/api/people")
					.then((response)=> response.json()) // convierte en json
					.then((data)=> setStore({ personajes: data.results }) ) //alamcena en personajes
			},

			traerVehiculos: () => {
				fetch ("https://swapi.dev/api/vehicles")
				.then((response)=> response.json())
				.then((data)=> setStore({vehiculos: data.results}) )
			},

			traerPlanetas: () => {
				fetch("https://swapi.dev/api/planets")
				.then((response)=> response.json())
				.then ((data)=> setStore({planetas: data.results}))
			},

			

 
			
			
			
			
			
			
			
			
			
			
			
			
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
