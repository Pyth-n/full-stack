function PersonForm({newName, newNumber, handleInputNewName, handleInputNewNumber, handleAddName}) {
  return (
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
  )
}

export default PersonForm