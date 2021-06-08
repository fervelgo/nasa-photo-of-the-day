import React, { useState } from "react";
import "./App.css";
import NasaImage from './Image'

function App() {

  const [image, setImage] = useState('')
  const [status, changeStatus] = useState('On Earth')

  const changeStatus = 

  return (
    <div className="App">
      <NasaImage image={image} changeStatus={changeStatus}/>
    </div>
  );
}

export default App;
