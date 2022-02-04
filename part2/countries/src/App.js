import { useState, useEffect } from "react";
import FindForm from "./components/FindForm";
import Countries from "./components/Countries";
import axios from 'axios'

function App() {
  const [countries, setCountries] = useState([])
  const [results, setResults] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(res => {
        console.log(res.data)
        setCountries(res.data)
      })
  }, [])

  const inputSearchHandler = (e) => {
    setSearch(e.target.value)
    setResults(countries.filter(country => {

      return country.name.common.toLowerCase().includes(search.toLowerCase())
    }))
  }

  return (
    <div>
      {results.length}
      <FindForm countries={countries} onChange={inputSearchHandler} />
      <Countries countries={countries} />
    </div>
  );
}

export default App;
