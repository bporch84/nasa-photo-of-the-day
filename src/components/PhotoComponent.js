import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios"

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
<div className="container">
     <img src={photo.url} alt=""/>  
        <p>{photo.explanation}</p> 
</div>
)
}

export default PhotoComponent