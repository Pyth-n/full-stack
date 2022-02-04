import Country from "./Country"
import CountryInfo from "./CountryInfo"

const Countries = ({ countries }) => {
  const isOnly = countries.length === 1
  const country = isOnly ? countries[0] : null
  return (
    <div>
      {!isOnly &&
        countries.map(c => {
          return <Country key={c.name.common}
            name={c.name.common}
            />
      })}
      {isOnly &&
        <CountryInfo country={country} />
      }
    </div>
  )
}

export default Countries