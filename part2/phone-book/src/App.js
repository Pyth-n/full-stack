import { useState, useEffect } from 'react'
import phoneService from './service/phoneBook'
import Person from './components/Person'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

function App() {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('A somebody')
  const [newNumber, setNewNumber] = useState('000-555-9292')

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
        id: persons.length + 1
      }

      phoneService
        .create(personObject)
        .then(data => {
          setPersons(persons.concat(data))
        })
    }
    else {
      alert(newName + ' is not available')
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
      {persons.map(x => <Person key={x.id} person={x} deletePerson={deletePerson} />)}
    </div>
  );
}

export default App;
