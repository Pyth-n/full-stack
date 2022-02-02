import { useState, useEffect } from "react";
import FindForm from "./components/FindForm";
import axios from 'axios'

function App() {
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])
  const inputHandle = (e) => setSearch(e.target.value)

  useEffect(() => {
    console.log('nothing lol')
  }, [])

  return (
    <div>
      <FindForm search={search} onChange={inputHandle}/>
    </div>
  );
}

export default App;
