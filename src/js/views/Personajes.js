import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/Personajes.css";

const Personajes = () => {

    const {store , actions} = useContext(Context)

    console.log(store.personajes);

    return(
        <>
            <h1 className=" d-flex ms-0">Personajes</h1>
            {store.personajes.map((item)=>(
                <>
                     <div className="card d-felx" style={{ width: '18rem' }}>
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">Altura: {item.height}</p>
                            <p className="card-text">Color de piel: {item.skin_color}</p>
                            <a href="#" className=" btn btn-primary">Más info</a>
                            <button type="button" className="fas fa-heartcle"></button>
                        </div>
                    </div>
                </>
            ))}
        </>

    );
};

export default Personajes;
