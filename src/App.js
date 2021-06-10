import React, { useState, useEffect } from "react";
import NasaImage from './NasaImage'
import axios from 'axios'

function App(props) {

  const [image, setImage] = useState('')
  const [author, setAuthor] = useState('')
  const [explanation, setExplanation] = useState('')
  const [dateTaken, setDateTaken] = useState('')
  const [title, setTitle] = useState('')
 


  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then((res) => { 
        console.log(res)
        setImage(res.data.url)
        setAuthor(res.data.copyright)
        setDateTaken(res.data.date)
        setExplanation(res.data.explanation)
        setTitle(res.data.title)
    })
    .catch( err => { console.log(err)})
  }, [])

  return (
    <div>
      <NasaImage image={image} author={author} dateTaken={dateTaken} title={title} explanation={explanation}/>
    </div>
  );
}

export default App;
