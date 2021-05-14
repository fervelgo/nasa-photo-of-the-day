import React from "react";
import ReactDOM from "react-dom";

const ShowPic = ({info,action}) => {
    return(
        <button onClick ={()=>action(info.image)} >
            Let's see it
        </button>
    )
}

export default ShowPic;