import { useState } from "react"
import CountryInfo from "./CountryInfo"

const Country = ({ name, country }) => {
  let [showInfo, setShowInfo] = useState(false)
  const handleClick = () => setShowInfo(!showInfo)
  return (
    <>
      {name} <ShowButton onClick={handleClick} text={showInfo ? 'hide' : 'show'} />
      {showInfo &&
        <>
          <CountryInfo country={country} />
        </>
      }
      <br />
    </>
  )
}


const ShowButton = ({text, onClick}) => {
  return (
    <>
      <button onClick={onClick}>{text}</button>
    </>
  )
}

export default Country