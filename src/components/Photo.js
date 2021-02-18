import React from "react"
import "../App.css";

const Photo = (props) => {
    return(
        <div>
            <img src={props.url} alt=""/>
        </div>
    )
}

export default Photo