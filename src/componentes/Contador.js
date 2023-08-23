//import React from "react";
import '../hojas-de-estilo/Contador.css';

export default function Contador({numClics}){
    return(
        <>
            <div className="contador">
                {numClics}
            </div>
        </>
    );
}