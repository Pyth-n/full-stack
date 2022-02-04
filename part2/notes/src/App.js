import { useState, useEffect } from 'react'
import axios from 'axios';
import Note from "./components/Note";

function App() {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('new note...')
  const [showAll, setShowAll] = useState(true)

  const addNote = (event) => {
    event.preventDefault()
    
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
    }

    axios
      .post('http://localhost:3001/notes', noteObject)
      .then(res => {
        setNotes(notes.concat(res.data))
        setNewNote('')
      })
  }

  const handleNewNote = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important === true)

  useEffect(() => {
    
    axios
      .get('http://localhost:3001/notes')
      .then(res => {
        console.log('promise fulfilled')
        setNotes(res.data)
        
      })
      console.log('effect')
  }, [])

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notesToShow.map(data => 
          <Note key={data.id} content={data.content} />
        )}
      </ul>
      <form onSubmit={addNote}>
          <input value={newNote} onChange={handleNewNote} />
          <button type='submit'>save</button>
          <button type='button' onClick={() => setShowAll(!showAll)}>
            {showAll ? 'show important' : 'show all'}
          </button>
      </form>
    </div>
  );
}

export default App;
