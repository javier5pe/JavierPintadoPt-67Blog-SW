import React, { useContext } from "react";
import { Context } from "../store/appContext";


const Vehiculos = () => {

    const {store , actions} = useContext(Context)

    console.log(store.vehiculos);

    return(
        <>
            <h1 className=" d-flex ms-0">Vehiculos</h1>
            {store.vehiculos.map((item)=>(
                <>
                     <div className="card" style={{ width: '18rem' }}>
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">Diametro: {item.diameter}</p>
                            <p className="card-text">Rotacion: {item.rotation_period}</p>
                            <a href="#" className="btn btn-primary">Más info</a>
                        </div>
                    </div>
                </>
            ))}
        </>

    );
};

export default Vehiculos;
