import React from "react"
import "../App.css";
import Copyright from "./Copyright"

const Title = (props) => {

return(
    <div>
        <h2>{props.title}</h2>
        <Copyright copyright={props.copyright} />
    </div>

)
}

export default Title