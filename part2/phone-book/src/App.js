import { useState, useEffect } from 'react'
import phoneService from './service/phoneBook'
import Person from './components/Person'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import './app.css'

function App() {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('A somebody')
  const [newNumber, setNewNumber] = useState('000-555-9292')
  const [successMesage, setSuccessMessage] = useState(null)
  const [errorMessage, setErrorMesage] = useState(null)

  useEffect(() => {
    phoneService
      .getAll()
      .then(data => {
        setPersons(data)
      })
  }, [])
  
  const handleInputNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleInputNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleAddName = (event) => {
    event.preventDefault()
    
    if (isNameAvailable(newName)) {
      const personObject = {
        name: newName,
        number: newNumber,
      }

      phoneService
        .create(personObject)
        .then(data => {
          setPersons(persons.concat(data))
          setSuccessMessage(`Added '${data.name}' to phone book`)
          setTimeout(() => setSuccessMessage(null), 5000)
        })
    }
    else {
      const person = persons.find(p => p.name.toLowerCase() == newName.toLowerCase())

      const personObject = {
        ...person,
        number: newNumber
      }

      phoneService
        .update(person.id, personObject)
        .then(data => {
          setPersons(persons.map(p => p.id !== person.id ? p : data))
        })
        .catch(error => {
          setErrorMesage(`unable to change number for ${person.name}`)
          setTimeout(() => setErrorMesage(null), 5000)
        })
    }
  }

  const isNameAvailable = (name) => {
    return !persons.some((x) => x.name === name)
  }

  const deletePerson = id => {
    const person = persons.find(p => p.id === id)
    const result = window.confirm(`Delete ${person.name}?`)
    if (!result) { return }
    
    phoneService
      .del(id)
      .then(data => {
        console.log(data)
        setPersons(persons.filter(p => p.id !== id))
      })
      .catch(error => {
        setErrorMesage(`unable to delete ${person.name}`)
        setTimeout(() => setErrorMesage(null), 5000)
      })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Error message={errorMessage} />
      <Success message={successMesage} />
      <Filter persons={persons} />
      <h2>add new</h2>
      <PersonForm 
        newName={newName}
        newNumber={newNumber}
        handleInputNewName={handleInputNewName}
        handleInputNewNumber={handleInputNewNumber}
        handleAddName={handleAddName} />
      <h2>Numbers</h2>
      {persons.map(x => <Person key={x.id} person={x} deletePerson={deletePerson} />)}
    </div>
  );
}

const Success = ({ message }) => {
  if (message === null) return null
  return(
    <div className='success'>
      {message}
    </div>
  )
}

const Error = ({ message }) => {
  if (message === null) return null
  return (
    <div className='error'>
      {message}
    </div>
  )
}

export default App;
