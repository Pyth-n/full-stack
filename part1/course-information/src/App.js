const Header = ({ name }) => {
  return (
    <h1>
      {name}
    </h1>
  )
}

const Content = ({ parts }) => {
  return (
    <>
      {parts.map(x => <Part name={x.name} exercise={x.exercises} key={x.id} />
      )}
    </>
  )
}

const Part = ({ name, exercise }) => {
  console.log(name, exercise)
  return (
    <>
      <p>
        {name}: {exercise}
      </p>
    </>
  )
}

const Total = ({ parts }) => {
  let total = parts.reduce((t, c) => t + c.exercises, 0)

  return (
    <>
      <strong>
        <p>
          Total exercises: {total}
        </p>
      </strong>
    </>
  )
}

function App() {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <>
      {courses.map(x => 
        <Course course={x} key={x.id} />
      )}
    </>
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
    </div>
  );
}

export default App;
