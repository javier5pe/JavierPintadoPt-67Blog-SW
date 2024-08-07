import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/Personajes.css";
import { Link } from "react-router-dom";



const Personajes = () => {

    const {store , actions} = useContext(Context)

    

    return(
        <>
            <h1 className=" text-danger d-flex ms-0 mb-2">Personajes</h1>

                <div className="cardpersonajes">
                    
                    {store.personajes.map((item, index)=>(
                        <>
                            <div className="card carta " style={{ width: '18rem' }}>
                               
                                <div className="card-body ">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">Altura: {item.height}</p>
                                    <p className="card-text">Color de piel: {item.skin_color}</p>
                                    
                                        <Link to={"/pd/" + index}>
                                            <butoon className=" botoninfo btn btn-outline-primary">Más info</butoon>
                                        </Link>
                                        
                                        <button onClick={()=>actions.addFavoritos(item.name)} className=" corazon m-0 fas fa-heart"></button>
                                </div>
                            
                            </div>
                        </>
                    ))}

                </div>
            
        </>
    );
};

export default Personajes;
