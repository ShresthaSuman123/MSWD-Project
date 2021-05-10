import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [nice, setNice] = useState(0)
  const [nochange, setNochange] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseNice = () => {
    console.log('Nice Button Clicked')
    setNice(nice+1)
  }

  const increaseNochange = () => {
    console.log('Nochange Button Clicked')
    setNochange(nochange+1)
  }

  const increaseBad = () => {
    console.log('Bad Button Clicked')
    setBad(bad+1)
  }

  return (
    <div>
      <h1> Give Feedback </h1>
      <button onClick={increaseNice}>Nice</button> 
      <button onClick={increasenochange}>nochange</button> 
      <button onClick={increaseBad}>Bad</button> <br/>
      <h1> Statistics </h1>
      Nice: {nice} <br/>
      Nochange: {nochange} <br/>
      Bad: {bad} <br/>
    </div>
  )
}

export default App