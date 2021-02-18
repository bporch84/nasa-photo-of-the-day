import React from "react"
import "../App.css";
import styled from "styled-components"

const StyledCopyright = styled.div`
color: #fc3d21;
`

const Copyright = (props) => {
    return(
        <StyledCopyright>
            <h3>{props.copyright}</h3>
        </StyledCopyright>
    )
}

export default Copyright