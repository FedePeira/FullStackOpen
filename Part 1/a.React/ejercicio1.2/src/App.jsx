
const Header = (props) => {
  return (
    <>
      <h1>{props.name}</h1>
    </>
  )
}

const Part = ({ part, exercise }) => {
  return (
    <>
      <p>{part} = {exercise}</p>
    </>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <>
      <Part part={props.content[0].part} exercise={props.content[0].exercise}/>
      <Part part={props.content[1].part} exercise={props.content[1].exercise}/>
      <Part part={props.content[2].part} exercise={props.content[2].exercise}/>
    </>
  )
}

const Total = (props) => {

const totalExercises = props.exercises.reduce((sum, exerciseCount) => sum + exerciseCount,  0);

  return (
    <>
      <p>
        {props.exercises[0]} + {props.exercises[1]} + {props.exercises[2]} = {totalExercises}
      </p>
    </>
  );
};

const App = () => {
const course = 'Half Stack application development'
const part1 = 'Fundamentals of React'
const exercises1 = 10
const part2 = 'Using props to pass data'
const exercises2 = 7
const part3 = 'State of a component'
const exercises3 = 14
const exercises = [exercises1, exercises2, exercises3];
const content = [
  { part: part1, exercise: exercises1 },
  { part: part2, exercise: exercises2 },
  { part: part3, exercise: exercises3 }
]


return (
  <div>
    <Header name={course}/>
    <Content content={content}/>
    <Total exercises={exercises}/>
  </div>
)
}

export default App
