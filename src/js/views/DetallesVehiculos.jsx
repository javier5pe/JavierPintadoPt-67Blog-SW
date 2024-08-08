import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";


const DetallesVehiculos = () => {

    const {store, actions} = useContext(Context);
    const params = useParams();
    console.log(store.vehiculos)
    
    return (
       
       <div className="card carta " style={{ width: '18rem' }}>
                               
            <div className="card-body ">
                <h5> Nombre: {store.vehiculos[params.vehiculoposicion].name}                     </h5>
                <p> Modelo: {store.vehiculos[params.vehiculoposicion].model}                     </p>
                <p> Fabricante:  {store.vehiculos[params.vehiculoposicion].manufacturer}         </p>
                <p> Coste: {store.vehiculos[params.vehiculoposicion].cost_in_credits}            </p>
                <p> Velocidad: {store.vehiculos[params.vehiculoposicion].max_atmosphering_speed} </p>
                <p> Pasajeros: {store.vehiculos[params.vehiculoposicion].passengers}             </p>
            </div>
                            
        </div>
    )
}


export default DetallesVehiculos;