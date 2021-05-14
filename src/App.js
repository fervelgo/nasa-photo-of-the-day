import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./App.css";
import "./Footer";
import "./Image%copyTo";
import "./Meme&show";
import TitleSection from './TitleContainer';


export default function App() {

  const [image, setImage] = useEffect(null)

  const openImage = (url) =>{
      
  }
  
  useEffect(() => {
    axios
    .get("https://api.nasa.gov/planetary/apod?count=6&api_key=DEMO_KEY")
    .then((res)=>{
      console.log(res.data.title);
      imageTitle(res.data.title);
      image(res.data.url);
      
    })
    .catch((err) => {
      console.log(err);
  })
},[])
  // const thumbnail = (imageTitle) => {
  //   console.log(setImageTitle);
  //   setImageTitle(imageTitle);  
  //  }

  return (
    <div className="App">
      <TitleSection tagline="Check It 🤟🏻"/>
      <ShowPic action={openImage} info={image}/>


    </div>
  )

}
  