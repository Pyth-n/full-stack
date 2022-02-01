import { useState } from 'react'

function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('Ada Lovelace')

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleAddName = (event) => {
    event.preventDefault()

    const personObject = {
      name: newName
    }
    setPersons(persons.concat(personObject))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          <button type='submit' onClick={handleAddName}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        debug: {newName}
      </div>
    </div>
  );
}

export default App;
