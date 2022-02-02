const FindForm = function({ search, onChange }) {
  return(
    <form>
      find countries <input value={search} onChange={onChange}/>
    </form>
  )
}

export default FindForm