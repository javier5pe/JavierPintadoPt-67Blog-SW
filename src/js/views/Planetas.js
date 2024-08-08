import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";



const Planetas = () => {

    const {store , actions} = useContext(Context)

    console.log(store.planetas);

    return(
        <>
            <h1 className=" text-danger d-flex ms-0 mb-2 mt-5">Planetas</h1>
            
            <div className="cardppv">
                
                {store.planetas.map((item,index)=>(
                    
                        <div className="card" style={{ width: '18rem' }}>
                           
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">Diametro: {item.diameter}</p>
                                <p className="card-text">Rotacion: {item.rotation_period}</p>
                                
                                <Link to={"/planetasinfo/"+ index}>
                                    <butoon className=" botonInfo btn btn-outline-primary me-5">Más info</butoon>
                                </Link>
                                
                                <button onClick={()=>actions.addFavoritos(item.name)} className=" corazon m-0 fas fa-heart"></button>

                            </div>
                        </div>
                    
                ))}
            </div>
        </>

    );
};

export default Planetas;
