import React, { useState, useEffect } from 'react'

const Statistics = (props) => {
  return (
  <div>
  <h1> Statistics </h1>
  Nice: {props.nice} <br/>
  Nochange: {props.nochange} <br/>
  Bad: {props.bad} <br/>
  All: {props.all} <br/>
  Average: {props.average} <br/>
  Positive: {props.positive}% <br/>
  </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [nice, setNice] = useState(0)
  const [nochange, setNochange] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0.0)
  const [positive, setPositive] = useState(0.0)

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

  useEffect(() => {
    console.log('Triggering Hooks')
    setAll(nice+nochange+bad)
    setAverage((nice-bad)/all)
    setPositive((nice/all)*100)
  }, [nice, nochange, bad, all])

  return (
    <div>
      <h1> Give Feedback </h1>
      <button onClick={increaseNice}>Nice</button> 
      <button onClick={increaseNochange}>Nochange</button> 
      <button onClick={increaseBad}>Bad</button> <br/>
      <Statistics nice={nice} nochange={nochange} bad={bad} all={all} average={average} positive={positive} />
    </div>
  )
}

export default App