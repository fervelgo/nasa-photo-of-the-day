import React from 'react'
import axios from 'axios'

export default function NasaImage(props) {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(() => {

    })
}

