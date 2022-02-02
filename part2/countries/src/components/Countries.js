const Countries = ({ countries }) => {
  return (
    <>
      {countries.map(c => <p>{c.name.common}</p>)}
    </>
  )
}

export default Countries