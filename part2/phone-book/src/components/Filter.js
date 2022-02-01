import { useState } from 'react'

const Filter = ({ persons }) => {
  const [nameFilter, setNameFilter] = useState('')
  const handleChange = (event) => setNameFilter(event.target.value)
  return (
    <form>
      filter shown with <input onChange={handleChange} value={nameFilter}/>
    </form>
  )
}

export default Filter