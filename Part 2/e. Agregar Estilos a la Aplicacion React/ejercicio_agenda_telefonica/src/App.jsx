import { useState, useEffect } from 'react'
import personServices from './services/persons'

// Componente Filter
const Filter = ({ value, handleChange }) => {
  return(
    <div>
      filter shown with<input value={value} onChange={handleChange}/>
    </div>
  )
}

// Componente PersonsForm
const PersonsForm = (props) => {
  return(
    <form onSubmit={props.createPerson}>
      <div>
        name: <input value={props.valueName} onChange={props.handleNameChange}/>
      </div>
      <div>number: <input value={props.valueNumber} onChange={props.handleNumberChange}/></div>
      <div> <button type="submit">Add</button> </div>
    </form>
  )
}

// Componente Persons
const Persons = ({ array, deletePerson }) => {
  return(
    <ul>
        {array && array.map(person => 
          <li key={person.id}>
            {person.name} / {person.number}
            <button onClick={() => deletePerson(person.id)}>delete</button>
          </li>)}
      </ul>
  )
}

// Componente App
const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setNewFilterName] = useState('')

  // Metiendo los datos de las personas del servidor al useState([]) de App
  useEffect(() => {
    personServices
      .getAll()
      .then(initialPersons => {
        console.log('Persons available')
        setPersons(initialPersons)
      })
  }, [])


  const filterPersons =  filterName === '' ? persons : persons.filter(person => person.name.includes(filterName))

  const findPerson = ( id ) => {
    return persons.some(person => person.id === id);
  }

  const createPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
      id: (persons.length +  1).toString()
    }

    if(!findPerson(personObject.id)){
      // Utilizamos HTTP POST para la creacion de una nueva persona
      // Le ingresamos la url de todas las personas y le pasamos el nuevo Objeto
      personServices
      // POST devuelve un Promise --> Objeto que representa la finalizacion o el fracaso
      // de una operacion asincrona
      .create(personObject)
      // .then() se utiliza para especificar que hacer una vez que la Promise se resuelve
      // response --> respuesta del servidor --> accedes a los datos de la respuesta(response)
      .then(returnedPerson => {
        console.log(returnedPerson)
        console.log('Person added')
        setNewName('')
        setNewNumber('')
      })      
    } else {
      alert(`${newName} is already added to phonebook`)
    }
  }

  const deletePerson = (id) => {

    if(window.confirm(`Delete ${id}`)){
      personServices
        .deleteObject(id)
        .then(deleteObject => {
          console.log('Person deleted')
          console.log(deleteObject)
        })
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
        createPerson={createPerson}/>
      <h3>Persons</h3>
        <Persons 
        array={filterPersons}
        deletePerson={deletePerson}/>
    </div>
  )
}

export default App
