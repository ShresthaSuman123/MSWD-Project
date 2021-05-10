import React, { useState, useEffect } from 'react'

const Statistic = (props) => {
  return (
    <div>
      <td width = '200px'> {props.text} </td> <td width="20px">:</td> <td width="100px"> {props.value} </td> <br/>
    </div>
  )
}

const Statistics = (props) => {
  if (props.all == 0) {
    return (
      <div>
        <h1> Statistics </h1>
        No feedback given
      </div>
    )
  }
  return (
  <div>
  <h1> Statistics </h1>
  <table width = '500px'>
  <tr> <Statistic text="Nice" value ={props.nice} /> </tr>
  <tr> <Statistic text="Nochange" value ={props.nochange} /> </tr>
  <tr> <Statistic text="Bad" value ={props.bad} /> </tr>
  <tr> <Statistic text="All" value ={props.all} /> </tr>
  <tr> <Statistic text="Average" value ={props.average} /> </tr>
  <tr> <Statistic text="Positive" value ={props.positive} /> </tr>
  </table>
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