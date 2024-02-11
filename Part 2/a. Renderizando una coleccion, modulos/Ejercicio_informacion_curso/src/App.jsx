
import React from 'react'


const Title = ({ title }) => {
  return(
    <h1>{title}</h1>
  )
}

const Total = ({ total }) => {
  return(
    <p>total of {total} exercises</p>
  )
}

const Content = ({ parts }) => {
  let total = 0
  
  for (let part of parts) {
    total += part.exercises;
  }

  return(
    <div>
      <ul>
        {parts.map(part => 
          <li key={part.id}>
            {part.name} {part.exercises}
          </li>
          )}
      </ul>
      <Total total={total}/>
    </div>
  )
}

const Course = ({ course }) => {
  return(
    <div>
      <Title title={course.name}/>
      <Content parts={course.parts}/> 
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
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App
