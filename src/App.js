import React from "react";
import PhotoComponent from "./components/PhotoComponent"
import styled from "styled-components";

const StyledTitle = styled.h1`
font-size: 50px;
text-transform: uppercase;
font-family: monospace;
width: 50%;
margin: 20px auto;
text-align: center;

&:hover{
  background-color: black;
  color:white;
}
`


function App() {

  return (
    <div className="App">
      <StyledTitle>NASA Photo of the Day</StyledTitle>
      <PhotoComponent />
    </div>
  );
}

export default App;
