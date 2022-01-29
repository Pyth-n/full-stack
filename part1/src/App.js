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
      <button onClick={decreaseByOne}>minus</button>
      <button onClick={reset}>reset</button>
      <button onClick={increaseByOne}>plus</button>
    </div>
  )
}

const Display = ({ counter }) => {
  return (
    <div>
      {counter}
    </div>
  )
}

export default App