import React from "react";  
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import  './Trailer.css';

const Trailer = (   ) => {
    let params = useParams();
    const key = params.ytTrailerId;

    return (
        <div className="react-player-wrapper">
            { (key!=null)?
                <ReactPlayer controls={true} url={`https://www.youtube.com/watch?v=${key}`} width='100%' height='100%'/>:null
            }
        </div>

    );
}

export default Trailer;