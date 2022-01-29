import React, { useState } from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const reset = () => setCounter(0)

  return(
    <div>
      <Display counter={counter} />
      <br />
      <Button onClick={decreaseByOne} text='minus' />
      <Button onClick={reset} text='reset' />
      <Button onClick={increaseByOne} text='plus' />
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