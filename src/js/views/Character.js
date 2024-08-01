import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/characters.css";

const Character = () => {

    const {store , actions} = useContext(Context)

    console.log(store.personajes);

    return(
        <>
            <h1>Characters</h1>
            {store.personajes.map((item)=>(
                <>
                     <div className="card" style={{ width: '18rem' }}>
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">Altura: {item.height}</p>
                            <p className="card-text">Color de piel: {item.skin_color}</p>
                            <a href="#" className="btn btn-primary">Más info</a>
                        </div>
                    </div>
                </>
            ))}
        </>

    );
};

export default Character;
