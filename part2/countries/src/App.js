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
        setResults(countries)
      })
  }, [])

  const inputSearchHandler = (e) => {
    setSearch(e.target.value)
    if (e.target.value == '') {
      setResults(countries)
    }
    else {
      setResults(countries.filter(country => {
        return country.name.common.toLowerCase().includes(search.toLowerCase())
      }))
    }
  }

  return (
    <div>
      <FindForm countries={countries} onChange={inputSearchHandler} />
      {results.length > 10 &&
        <p>Too many matches, specify another filter</p>
      }
      {results.length <= 10 &&
      <>
        <Countries countries={results} />
      </>
      }
    </div>
  );
}

export default App;
