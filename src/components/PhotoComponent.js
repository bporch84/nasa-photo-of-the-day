import React, { useState, useEffect } from "react";
import axios from "axios"
import styled from "styled-components"

const StyledPhoto = styled.div`
text-align: center;

 img{
   border-radius: 5%;
   filter: grayscale(5%);

   &:hover{
     border-radius: 100%;
     filter: grayscale(100%);
     transform: scale(-1);
   }
 }

p{
  color: maroon;
  font-size: 20px;
  width: 65%;
  margin: 20px auto;
}
`

const PhotoComponent = () => {
const [photo, setPhoto] = useState({});

        useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=nSwqKxVrLP50wRyGjXg9WqJXhTHqN7LD7CebCzce")
          .then(res => {
            console.log(res)
            setPhoto(res.data)
          })
          .catch(err => {
            console.log(err)
          })
        }, [])

return (
<StyledPhoto className="container">
     <img src={photo.url} alt=""/>  
        <p>{photo.explanation}</p> 
</StyledPhoto>
)
}

export default PhotoComponent