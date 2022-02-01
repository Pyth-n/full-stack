import { useState } from 'react'
import Note from "./components/Note";

function App({ data }) {
  const [notes, setNotes] = useState(data)
  const [newNote, setNewNote] = useState('new note...')

  const addNote = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
  }

  const handleNewNote = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {data.map(data => 
          <Note key={data.id} content={data.content} />
        )}
      </ul>
      <form onSubmit={addNote}>
          <input value={newNote} onChange={handleNewNote} />
          <button type='submit'>save</button>
      </form>
    </div>
  );
}

export default App;
