import { useState } from 'react'
import Person from './components/Person'

function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('Ada Lovelace')
  const [newNumber, setNewNumber] = useState('000-555-9292')

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
      <form>
        <div>
          name: <input value={newName} onChange={handleInputNewName} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleInputNewNumber} />
        </div>
        <div>
          <button type='submit' onClick={handleAddName}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(x => <Person key={x.id} name={x.name} number={x.number} />)}
    </div>
  );
}

export default App;
