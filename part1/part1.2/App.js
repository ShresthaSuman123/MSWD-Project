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
  const part1 = 'Fundamentals of React'
  const task1 = 10
  const part2 = 'Using props to pass data'
  const task2 = 7
  const part3 = 'State of a component'
  const task3 = 14


  return (
    <div>
      <Header course={course} />
      <Content p1 = {part1} ex1 = {task1} p2 = {part2} ex2 = {task2} p3 = {part3} ex3 = {task3} />
      <Total total = {task1 + task2 + task3} />
    </div>
  )
}

export default App
