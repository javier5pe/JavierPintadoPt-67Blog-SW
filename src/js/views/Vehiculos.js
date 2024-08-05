import React, { useContext } from "react";
import { Context } from "../store/appContext";


const Vehiculos = () => {

    const {store , actions} = useContext(Context)

    console.log(store.vehiculos);

    return(
        <>
            <h1 className=" text-danger d-flex ms-0 mb-5">Vehiculos</h1>
            {store.vehiculos.map((item)=>(
                <>
                     <div className="card" style={{ width: '18rem' }}>
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">Modelo: {item.model}</p>
                            <p className="card-text">Pasajeros: {item.passengers}</p>
                            <a href="#" className=" botoninfo btn btn-outline-primary">Más info</a>
                            <button type="button" className="fas fa-heart"></button>
                        </div>
                    </div>
                </>
            ))}
        </>

    );
};

export default Vehiculos;
