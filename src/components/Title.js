import React from "react"
import "../App.css";
import Copyright from "./Copyright"
import styled from "styled-components"

const StyledTitle = styled.div`
h2{
    color: #488cc8;

    &:hover{
        text-transform: uppercase;
    }
}
`

const Title = (props) => {

return(
    <StyledTitle>
        <h2>{props.title}</h2>
        <Copyright copyright={props.copyright} />
    </StyledTitle>

)
}

export default Title