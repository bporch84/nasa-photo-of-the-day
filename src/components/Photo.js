import React from "react"
import "../App.css";
import styled from "styled-components"

const StyledPhoto = styled.div`
img{
    border-radius: 5%;

    &:hover{
        filter: grayscale(100%);
    }
}
`

const Photo = (props) => {
    return(
        <StyledPhoto>
            <img src={props.url} alt=""/>
        </StyledPhoto>
    )
}

export default Photo