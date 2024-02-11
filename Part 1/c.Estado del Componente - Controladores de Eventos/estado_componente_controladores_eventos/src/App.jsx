import { useState } from 'react'


const App = () => {
  const [ counter, setCounter ] = useState(0)

  setTimeout(
    () => setCounter(counter + 1),
    1000
  )

  console.log('rendering...', counter)

  return (
    <div>{counter}</div>
  )
}

/* Manejo de Eventos con Botones Click */ 
/* const App = () => {
  const [ counter, setCounter ] = useState(0)

  return (
    <div>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>
        plus
      </button>
      <button onClick={() => setCounter(0)}>
        zero
      </button>
    </div>
  )
} */

/* Manejo de Eventos en Funciones */ 
/* const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <div>{counter}</div>
      <button onClick={increaseByOne}>
        plus
      </button>
      <button onClick={setToZero}>
        zero
      </button>
    </div>
  )
} */
/* Aplicacion final con refactorizacion y todo */ 
/* const App = () => {
  const [counter, setCounter] = useState(0)

 console.log('rendering with counter value', counter)

  const increaseByOne = () => {

   console.log('increasing, value before', counter)
   setCounter(counter + 1)
  }

  const decreaseByOne = () => { 

   console.log('decreasing, value before', counter)
   setCounter(counter - 1)
  }

  const setToZero = () => {

   console.log('resetting to zero, value before', counter)
   setCounter(0)
  }

  return (
    <div>
      <Display counter={counter} />
      <Button onClick={increaseByOne} text="plus" />
      <Button onClick={setToZero} text="zero" />
      <Button onClick={decreaseByOne} text="minus" />
    </div>
  )
}
 */  
export default App
