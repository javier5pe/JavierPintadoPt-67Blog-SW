import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";




const Vehiculos = () => {

    const {store , actions} = useContext(Context)

    console.log(store.vehiculos);

    return(
        <>
            <h1 className=" text-danger d-flex ms-0 mb-2 mt-5">Vehiculos</h1>
            
            <div className="cardppv">

                {store.vehiculos.map((item, index)=>(
                    
                    <div className="card carta" style={{ width: '18rem' }}>
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">Modelo: {item.model}</p>
                            <p className="card-text">Pasajeros: {item.passengers}</p>
                            
                            <Link to={"/vehiculosinfo/" + index}>
                                <butoon className=" botonInfo btn btn-outline-primary">Más info</butoon>
                            </Link>
                            
                            <button onClick={()=>actions.addFavoritos(item.name)} className=" corazon m-0 fas fa-heart"></button>
                        </div>
                    </div>
                    
                ))}
            </div>
        </>

    );
};

export default Vehiculos;
