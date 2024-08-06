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
           
                <p> {store.personajes[params.personajeposicion].name}   </p>
                
                
                
                
                    
            </div>
                            
        </div>

    )
}

export default DetallesPersonaje;