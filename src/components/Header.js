import React from "react";
import "../App.css";
import styled from "styled-components"

const StyledHeader = styled.div`
border: 1px #488cc8 solid;
background-color: #488cc8;

h1{
    color: #292F33;
}
`

const Header = () => {
return(
    <StyledHeader>
        <h1>NASA Photo of the Day</h1>
    </StyledHeader>
)
}

export default Header