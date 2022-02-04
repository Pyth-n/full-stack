import Country from "./Country"
import CountryInfo from "./CountryInfo"

const Countries = ({ countries }) => {
  const isOnly = countries.length === 1
  const country = isOnly ? countries[0] : null
  return (
    <div>
      {!isOnly &&
        <p>lonely</p>
      }
      {countries.map(c => {
        return <Country key={c.name.common}
          name={c.name.common}
          />
      })}
    </div>
  )
}

export default Countries