import { useState } from 'react'

function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ])
  const [newName, setNewName] = useState('Ada Lovelace')

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          <button type='submit'>
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
