import { useState, useEffect } from 'react'
import axios from 'axios'
import Person from './components/Person'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

function App() {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('Ada Lovelace')
  const [newNumber, setNewNumber] = useState('000-555-9292')

  useEffect(() => {
    axios
    .get('http://localhost:3001/persons')
    .then(res => {
      setPersons(res.data)
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
        id: persons.length + 1
      }
      setPersons(persons.concat(personObject))
    }
    else {
      alert(newName + ' is not available')
    }
  }

  const isNameAvailable = (name) => {
    return !persons.some((x) => x.name === name)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons={persons} />
      <h2>add new</h2>
      <PersonForm 
        newName={newName}
        newNumber={newNumber}
        handleInputNewName={handleInputNewName}
        handleInputNewNumber={handleInputNewNumber}
        handleAddName={handleAddName} />
      <h2>Numbers</h2>
      {persons.map(x => <Person key={x.id} name={x.name} number={x.number} />)}
    </div>
  );
}

export default App;
