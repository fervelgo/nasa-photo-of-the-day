import React from 'react'
import styled from 'styled-components'

const StyledImageCont = styled.div `

@import url('https://fonts.googleapis.com/css2?family=Baloo+Tammudu+2&family=Merriweather:wght@300&display=swap');

  h1, h3 {
    font-family: 'Baloo Tammudu 2';
    text-align: center;
  }

  p {
    font-family: 'Merriweather', serif;
    text-align: center;
  }

  img {
    align-items: center;
    border-radius: 5px;
    padding: 8px;
    margin: 8px;
  }

  display: flex column;
  justify-content: center;
  align-items: center;
  padding: 8px;
  width: 90%;
  

`



export default function NasaImage({ image, author, explanation, title, dateTaken }) {
   
  return (
    <StyledImageCont>
        <div>
          <h1>{title}</h1>
          <img src={image} alt="Nasa Image of the Day"/>
        </div>
        <div>
            <h3>What is this image of?</h3>
            <p>{explanation}</p>
            <p>It was taken by {author} on {dateTaken} </p>
        </div>
    </StyledImageCont>
  )
}

