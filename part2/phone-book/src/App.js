import { useState } from 'react'

function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('Ada Lovelace')

  const handleInputNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleAddName = (event) => {
    event.preventDefault()
    
    if (isNameAvailable(newName)) {
      const personObject = {
        name: newName
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
          <button type='submit' onClick={handleAddName}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        debug: {newName}
      </div>
      <div>
        {persons.map(x => x.name)}
      </div>
    </div>
  );
}

export default App;
