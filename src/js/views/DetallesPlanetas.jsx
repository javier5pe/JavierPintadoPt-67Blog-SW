import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";


const DetallesPlanetas = () => {

    const {store, actions} = useContext(Context);
    const params = useParams();
    console.log(store.planetas)
    
    return (
       
       <div className="card carta " style={{ width: '18rem' }}>
                               
            <div className="card-body ">
                <h5> Nombre: {store.planetas[params.planetaposicion].name} </h5>
                <p> Perriodo de rotación: {store.planetas[params.planetaposicion].rotation_period} </p>
                <p> Perido orbital: {store.planetas[params.planetaposicion].orbital_period} </p>
                <p> Diámetro: {store.planetas[params.planetaposicion].diameter} </p>
                <p> Clima: {store.planetas[params.planetaposicion].climate} </p>
                <p> Gravedad: {store.planetas[params.planetaposicion].gravity} </p>
            </div>
                            
        </div>
    )
}

export default DetallesPlanetas;