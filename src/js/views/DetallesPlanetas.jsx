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
                <p> {store.planetas[params.planetainfo].name} </p>
            </div>
                            
        </div>
    )
}

export default DetallesPlanetas;