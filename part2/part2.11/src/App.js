import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {

  const [human, setHuman] = useState([])

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/human')
      .then(response => {
        console.log('promise fulfilled')
        setHuman(response.data)
        console.log(response.data)
      })
  }, [])
  console.log('render', human.length, 'human')

  return (
    <div className="App">
      FINAL OUTPUT will be printed in console.log(), check the console
    </div>
  );
}

export default App;