import { useState } from 'react'

function App() {
  const [ good, setGood ] = useState(0)
  const [ neutral, setNeutral ] = useState(0)
  const [ bad, setBad ] = useState(0)

  const handleGoodVote = () => setGood(good + 1)
  const handleNeutralVote = () => setNeutral(neutral + 1)
  const handleBadVote = () => setBad(bad + 1)

  return (
    <div>
      <Header text='give feedback' />
      <Button onClick={handleGoodVote} text='good' />
      <Button onClick={handleNeutralVote} text='neutral' />
      <Button onClick={handleBadVote} text='bad' />
      <Header text='statistics' />
      <Display votes={[good, neutral, bad]} />
    </div>
  );
}

const Header = ({ text }) => <div><h1>{text}</h1></div>

const Display = ({ votes }) => {
  return (
    <div>
      <Statistics votes={votes} />
    </div>
  )
}

const Statistics = (props) => {
  let sum = 0
  for (let i = 0; i < props.votes.length; i++) {
    sum += props.votes[i]
  }
  if (sum == 0) return <>No feedback given</>
  console.log('sum', sum)
  let average = (props.votes[0] - props.votes[2]) / sum
  let positive = (props.votes[0] / sum) * 100
  console.log(average)
  return (
    <>
      <StatisticLine text='good' value={props.votes[0]} />
      <StatisticLine text='neutral' value={props.votes[1]} />
      <StatisticLine text='bad' value={props.votes[2]} />
      <br />
      all {sum}
      <br />
      average {average}
      <br />
      positive {positive} %
    </>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
    <>
      {text} {value}
      <br />
    </>
  )
}

const Button = ({ onClick, text }) => {
  return(
    <>
      <button onClick={onClick}>{text}</button>
    </>
  )
}

export default App;
