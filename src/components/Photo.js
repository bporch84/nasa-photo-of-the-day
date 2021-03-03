import React, { useState, useEffect } from "react"
import Title from "./Title"
import axios from "axios"
import Explanation from "./Explanation"

const Photo = () =>  {
    const [photo, setPhoto] = useState({})

    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=nSwqKxVrLP50wRyGjXg9WqJXhTHqN7LD7CebCzce")
        .then(res => {
            console.log(res)
            setPhoto(res.data)
        })
    }, [])
    
    return(
        <div>
            <Title title={photo.title} />
            <img src={photo.url} alt="" />
            <Explanation explanation={photo.explanation} />
        </div>
    )
}

export default Photo