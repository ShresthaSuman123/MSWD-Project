  
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
      <Part p = {props.p1} ex = {props.ex1} />
      <Part p = {props.p2} ex = {props.ex2} />
      <Part p = {props.p3} ex = {props.ex3} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Total - total: {props.total} </p>
    </div>
  )
}

const App = () => {

  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    task: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    task: 7
  }
  const part3 = {
    name: 'State of a component',
    task: 14
  }


  return (
    <div>
      <Header course={course} />
      <Content p1 = {part1.name} ex1 = {part1.task} p2 = {part2.name} ex2 = {part2.task} p3 = {part3.name} ex3 = {part3.task} />
      <Total total = {part1.task + part2.task + part3.task} />
    </div>
  )
}

export default App