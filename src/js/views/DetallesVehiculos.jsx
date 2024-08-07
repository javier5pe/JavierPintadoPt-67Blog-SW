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
                <p> {store.vehiculos[params.vehiculoposicion].name}         </p>
            </div>
                            
        </div>
    )
}

export default DetallesVehiculos;