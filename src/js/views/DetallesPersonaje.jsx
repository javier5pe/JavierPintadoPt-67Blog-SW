import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";


const DetallesPersonaje = () => {

    const {store, actions} = useContext(Context);
    const params = useParams();
    console.log(store.personajes)
    
    return (
       
       <div className="card carta " style={{ width: '18rem' }}>
                               
            <div className="card-body ">
                <p> {store.personajes[params.personajeposicion].name}         </p>
                <p> {store.personajes[params.personajeposicion].height}       </p>
                <p> {store.personajes[params.personajeposicion].mass}         </p>
                <p> {store.personajes[params.personajeposicion].hair_color}   </p>
                <p> {store.personajes[params.personajeposicion].skin_color}   </p>
                <p> {store.personajes[params.personajeposicion].birth_year}   </p>
                <p> {store.personajes[params.personajeposicion].gender}       </p>
            </div>
                            
        </div>
    )
}

export default DetallesPersonaje;