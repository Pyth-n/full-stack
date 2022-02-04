import { useState, useEffect } from 'react'
import noteService from './services/notes';
import Note from "./components/Note";
import axios from 'axios';

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

    noteService
      .create(noteObject)
      .then(res => {
        setNotes(notes.concat(res.data))
        setNewNote('')
      })
  }

  const handleNewNote = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const toggleImportanceOf = id => {
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important}

    noteService
      .update(id, changedNote)
      .then(res => {
        setNotes(notes.map(note => note.id !== id ? note : res.data))
      })
  }

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important === true)

  useEffect(() => {
    noteService
      .getAll()
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
          <Note key={data.id} note={data} toggleImportance={() => toggleImportanceOf(data.id)} />
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
