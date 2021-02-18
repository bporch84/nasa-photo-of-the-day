import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios"
import Header from "./components/Header"
import Title from "./components/Title"
import Photo from "./components/Photo"
import Explanation from "./components/Explanation"


function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=nSwqKxVrLP50wRyGjXg9WqJXhTHqN7LD7CebCzce")
          .then(res => {
            console.log(res)
            setData(res.data)
          })
          .catch(err => console.log(err))
  }, [])

return (
    <div className="App">
    <Header />
    <Title title={data.title} copyright={data.copyright} />
    <Photo url={data.url} />
    <Explanation explanation={data.explanation} />
    </div>
  );
}

export default App;
