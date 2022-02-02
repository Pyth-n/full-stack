import { useState, useEffect } from "react";
import FindForm from "./components/FindForm";
import axios from 'axios'

function App() {
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])
  const inputHandle = (e) => setSearch(e.target.value)

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(res => {
        console.log(res.data)
        setCountries(res.data)
      })
  }, [])

  return (
    <div>
      <FindForm search={search} onChange={inputHandle}/>
    </div>
  );
}

export default App;
