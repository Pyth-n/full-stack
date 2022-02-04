import { useState, useEffect } from 'react'
import noteService from './services/notes';
import Note from "./components/Note";
import './index.css'

function App() {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('new note...')
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)

  const addNote = (event) => {
    event.preventDefault()
    
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
    }

    noteService
      .create(noteObject)
      .then(data => {
        setNotes(notes.concat(data))
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
      .then(data => {
        setNotes(notes.map(note => note.id !== id ? note : data))
      })
      .catch(error => {
        console.log(error)
        setErrorMessage(`the note '${note.content}' was already deleted from server`)
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
        setNotes(notes.filter(note => note.id !== id))
      })
  }

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important === true)

  useEffect(() => {
    noteService
      .getAll()
      .then(data => {
        setNotes(data)
      })
  }, [])

  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage} />
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
      <Footer />
    </div>
  );
}

const Notification = ({ message }) => {
  if (message === null) return null

  return (
    <div className='error'>
      {message}
    </div>
  )
}

const Footer = () => {
  const footerStyle = {
    color: 'green',
    fontStyle: 'italic',
    fontSize: 16
  }

  return (
    <div style={footerStyle}>
      <br />
      <em>Note app &copy;</em>
    </div>
  )
}

export default App;
