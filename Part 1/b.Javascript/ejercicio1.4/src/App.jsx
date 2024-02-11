
const Header = (props) => {
  return (
    <>
      <h1>{props.name}</h1>
    </>
  )
}

const Part = ({ name, exercises }) => {
  return (
    <>
      <p>{name} = {exercises}</p>
    </>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <>
      <Part name={props.content[0].name} exercises={props.content[0].exercises}/>
      <Part name={props.content[1].name} exercises={props.content[1].exercises}/>
      <Part name={props.content[2].name} exercises={props.content[2].exercises}/>
    </>
  )
}

const Total = (props) => {

  const totalExercises = props.exercises.reduce((sum, part) => sum + part.exercises,  0);

  return (
    <>
      <p>
        {props.exercises[0].exercises} + {props.exercises[1].exercises} + {props.exercises[2].exercises} = {totalExercises}
      </p>
    </>
  );
};

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header name={course}/>
      <Content content={parts}/>
      <Total exercises={parts}/>
    </div>
  )
}

export default App
