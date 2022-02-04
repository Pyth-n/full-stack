const CountryInfo = ( { country } ) => {
  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>capital {country.capital[0]}</p>
      <p>population {country.population}</p>
      <h2>languages</h2>
      <ul>
        <Languages country={country} />
      </ul>
      <img src={country.flags.png} />
    </div>
  )
}

const Languages = ({country}) => {
  return (
    <>
      {Object.keys(country.languages).map((oneKey, i) => {
          return (
            <li key={i}>{country.languages[oneKey]}</li>
          )
      })}
    </>
  )
}

export default CountryInfo