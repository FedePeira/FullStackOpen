import { useState } from 'react'

const Filter = (props) => {
  return(
    <div>
      filter shown with<input value={props.value} onChange={props.handleChange}/>
    </div>
  )
}

const PersonsForm = (props) => {
  return(
    <form onSubmit={props.addPerson}>
      <div>
        name: <input value={props.valueName} onChange={props.handleNameChange}/>
      </div>
      <div>number: <input value={props.valueNumber} onChange={props.handleNumberChange}/></div>
      <div> <button type="submit">Add</button> </div>
    </form>
  )
}

const Persons = (props) => {
  return(
    <ul>
        {props.array.map(person => 
          <li key={person.name}>
            {person.name} / {person.number}
          </li>)}
      </ul>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setNewFilterName] = useState('')

  const filterPersons =  filterName === '' ? persons : persons.filter(person => person.name.includes(filterName))

  const findPerson = ( name ) => {
    return persons.some(person => person.name === name);
  }

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    if(!findPerson(personObject.name)){
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
      console.log("Name added")
    } else {
      alert(`${newName} is already added to phonebook`)
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilterName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
        <Filter 
        value={filterName} 
        handleChange={handleFilterChange}/>
      <h3>Add a New</h3>
        <PersonsForm 
        valueName={newName}
        handleNameChange={handleNameChange}
        valueNumber={newNumber}
        handleNumberChange={handleNumberChange}
        addPerson={addPerson}/>
      <h3>Persons</h3>
        <Persons array={filterPersons}/>
    </div>
  )
}

export default App
