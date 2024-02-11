import { useState } from 'react'

const Title = (props) => {
  return(
    <h1>{props.title}</h1>
  )
}

const Button = (props) => {
  return(
    <button onClick={props.handleClick}>
      {props.name}
    </button>
  )
}

const StatisticLine = (props) => {
  return(
    <p>{props.name} {props.cantidad}</p>
  )
}

const Total = (props) => {
  return(
    <p>all {props.total}</p>
  )
} 

const Average = (props) => {
  const average = props.total / props.cantEstados
  return(
    <p>average {average}</p>
  )
}

const Percentage = (props) => {
  const percentageOfGood = (props.cantGood / props.total) *  100;
  return (
    <p>Percentage of positive comments: {percentageOfGood}%</p>
  );
};

const Statistics = (props) => {
  const goodName = "good"
  const neutralName = "neutral"
  const badName = "bad"

  const cantEstados = 3

  if(props.all === 0){
    return(
      <div>
        no feedback given
      </div>
    )
  }
  return(
    <div>
      <StatisticLine name={goodName} cantidad={props.good}/>
      <StatisticLine name={neutralName} cantidad={props.neutral}/>
      <StatisticLine name={badName} cantidad={props.bad}/>
      <Total total={props.all}/>
      <Average total={props.all} cantEstados={cantEstados}/>
      <Percentage cantGood={props.good} total={props.all} />
    </div>
  )
}

const History = ({handleGoodClick, handleNeutralClick, handleBadClick}) => {

  const title1 = "give feedback"
  const title2 = "statistics"

  const goodName = "good"
  const neutralName = "neutral"
  const badName = "bad"

  return(
    <div>
      <Title title={title1}/>
      <Button name={goodName} handleClick={handleGoodClick}/>
      <Button name={neutralName} handleClick={handleNeutralClick}/>
      <Button name={badName} handleClick={handleBadClick}/>
      <Title title={title2}/>
    </div>
      
  )
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleGoodClick = () => {
    const valor = good + 1
    const allValor = all + 1
    setGood(valor)
    console.log("Good tiene: " + valor)
    setAll(allValor)
  }


  const handleNeutralClick = () => {
    const valor = neutral + 1
    const allValor = all + 1
    setNeutral(valor)
    console.log("Neutral tiene: " + valor)
    setAll(allValor)
  }

  const handleBadClick = () => {
    const valor = bad + 1
    const allValor = all + 1
    setBad(valor)
    console.log("Bad tiene: " + valor)
    setAll(allValor)
  }

  return (
    <div>
      <History 
        handleGoodClick={handleGoodClick}
        handleNeutralClick={handleNeutralClick}
        handleBadClick={handleBadClick}
        />
      <Statistics
        good={good}
        setGood={setGood}
        neutral={neutral}
        setNeutral={setNeutral}
        bad={bad}
        setBad={setBad}
        all={all}
        setAll={setAll}
        />
    </div>
  )
}

export default App