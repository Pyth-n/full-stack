import { useState, useEffect } from "react";
import FindForm from "./components/FindForm";
import Countries from "./components/Countries";
import axios from 'axios'

function App() {
  const [countries, setCountries] = useState([])
  const [results, setResults] = useState([])

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
      <FindForm countries={countries} />
      <Countries countries={countries} />
    </div>
  );
}

export default App;
