/*
const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  console.log(now, a + b)

  return (
    <div>
      <p>Hello World, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
    </div>
  )
}
*/
const Hello = (props) => {
  console.log(props)

  return(
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const Footer = () => {
  return(
    <div>
      greeting app created by <a href="https://federicopeirano.netlify.app/">Curriculum</a>
    </div>
  ) 
}

const App = () => {
  const friends = ['Peter', 'Maya']
  /*
  const friends = [
    { name: 'Peter', age: 4},
    { name: 'Maya', age: 24},
  ]
  */
 /*
  return (
    <div>
      <p>{friends[0].name} edad {friends[0].age}</p>
      <p>{friends[1].name} edad {friends[1].age} </p>
    </div>
  )
  */
 
  return (
    <div>
      <p>{friends}</p>
    </div>
  )

}
/*
const App = () => {
  const name = "Peter"
  const age = 10

  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10}/>
      <Hello name={name}  age={age}/>
      <Footer/>
    </>
  )
}
*/
export default App
