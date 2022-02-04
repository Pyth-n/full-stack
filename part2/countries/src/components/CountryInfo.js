const CountryInfo = ( { country } ) => {
  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>capital {country.capital[0]}</p>
      <p>population {country.population}</p>
      <h2>languages</h2>
      <ul>
        {Object.keys(country.languages).map((oneKey, i) => {
          return (
            <li key={i}>{country.languages[oneKey]}</li>
          )
        })}
      </ul>
      <img src={country.flags.png} />
    </div>
  )
}

const Languages = ({languages}) => {
  console.log(languages)
  const iter = languages.values()
  const arr = []
  while (iter) {
    arr.push(iter.next().value)
  }
  return (
    <>
      {arr.map(l => <p>{l}</p>)}
    </>
  )
}

export default CountryInfo