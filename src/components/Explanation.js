import React from "react";
import "../App.css";
import styled from "styled-components"

const StyledExplanation = styled.div`
color: #15418c;
width: 75%;
margin: 0 auto;
`

const Explanation = (props) => {
    return(
        <StyledExplanation>
            <p>{props.explanation}</p>
        </StyledExplanation>
    )
}

export default Explanation