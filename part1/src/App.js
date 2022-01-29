import React, { useState } from 'react'

const App = () => {
  const [ left, setLeft ] = useState(0)
  const [ right, setRight ] = useState(0)
  const [ allClicks, setAll ] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  return(
    <div>
      {left}
      <Button onClick={handleLeftClick} text='left' />
      <Button onClick={handleRightClick} text='right' />
      {right}
      <p>{allClicks.join(' ')}</p>
    </div>
  )
}

const Display = ({ counter }) => <div>{counter}</div>

const Button = ({ onClick, text }) => {
  return (
    <>
      <button onClick={onClick}>{text}</button>
    </>
  )
}

export default App