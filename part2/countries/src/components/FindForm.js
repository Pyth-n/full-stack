const FindForm = function({ search, onChange }) {

  return(
    <div>
      <form>
        find countries <input value={search} onChange={onChange}/>
      </form>
    </div>
  )
}

export default FindForm