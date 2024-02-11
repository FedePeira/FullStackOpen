
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
      <Part name={props.content.name} exercises={props.content.exercises}/>
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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  const exercises = [part1, part2, part3]

  return (
    <div>
      <Header name={course}/>
      <Content content={part1}/>
      <Content content={part2}/>
      <Content content={part3}/>
      <Total exercises={exercises}/>
    </div>
  )
}

export default App
