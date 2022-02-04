import { useState } from 'react'
import Person from './Person'

const Filter = ({ persons }) => {
  const [nameFilter, setNameFilter] = useState('')
  const [results, setResults] = useState([])
  
  const handleChange = (event) => {
    setNameFilter(event.target.value)
    filter(event.target.value)
  }

  const filter = (name) => {
    setResults(persons.filter((person) => {
      return person.name.toLowerCase().includes(name.toLowerCase())
    }))
  }

  return (
    <div>
        <form>
          filter shown with <input onChange={handleChange} value={nameFilter}/>
        </form>
        <div>
          {results.map(person => <Person key={person.id} person={person} />)}
        </div>
    </div>
  )
}

export default Filter