import React, { useEffect } from 'react'
import axios from 'axios'

export default function NasaImage({ image, author, explanation, title, dateTaken }) {
   
  return (
    <div className='container'>
        <h1>{title}</h1>
        <img src={image} alt="Nasa Image of the Day"/>
        <div>
            <h3>What is this image of?</h3>
            <p>{explanation}</p>
            <p>It was taken buy {author} on {dateTaken} </p>
        </div>
    </div>
  )
}

