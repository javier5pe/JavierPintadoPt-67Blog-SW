import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";


const DetallesPersonaje = () => {

    const {store, actions} = useContext(Context);
    const params = useParams();

    console.log(store.personajes)

    return (
        <>
           {store.personajes[params.personajeposicion].name}
           <>hr</>
           {store.personajes[params.personajeposicion].gender}
           <>hr</>
           {store.personajes[params.personajeposicion].height}
        </>
    )
}

export default DetallesPersonaje;