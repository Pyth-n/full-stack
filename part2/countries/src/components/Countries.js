import Country from "./Country"

const Countries = ({ countries }) => {
  const isOnly = countries.length === 1
  return (
    <div>
      {!isOnly &&
        <p>not lonely</p>
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