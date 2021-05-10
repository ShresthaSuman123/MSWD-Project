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
  const total = props.parts.reduce(function(sum, parts) { return sum + parts.task }, 0)
  return (
    <div>
      <p>Total - total: {total} </p>
    </div>
  )
}

const Course = (props) => {
  return (
    <div>
      <Header course={props.course.name} />
      <Content parts={props.course.parts} />
      <Total parts={props.course.parts} />
    </div>
  )
}

const App = () => {

  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        task: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        task: 7,
        id: 2
      },
      {
        name: 'State of a component',
        task: 14,
        id: 3
      }
    ]
  }


  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App