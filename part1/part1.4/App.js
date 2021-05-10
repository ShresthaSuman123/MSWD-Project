import React from 'react'

const Header = (props) => {
  return (
    <div>
      <p>Header - Course: {props.course} </p>
    </div>
  )
}


const Part = (props) => {
  return (
    <div>
      <p>Content - Part - Part Name: {props.p} and Exercises: {props.ex} </p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part p = {props.parts[0].name} ex = {props.parts[0].task} />
      <Part p = {props.parts[1].name} ex = {props.parts[1].task} />
      <Part p = {props.parts[2].name} ex = {props.parts[2].task} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Total - total: {props.parts[0].task + props.parts[1].task + props.parts[2].task} </p>
    </div>
  )
}

const App = () => {

  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      task: 10
    },
    {
      name: 'Using props to pass data',
      task: 7
    },
    {
      name: 'State of a component',
      task: 14
    }
  ]


  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App