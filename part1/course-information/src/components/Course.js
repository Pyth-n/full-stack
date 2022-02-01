const Course = ({ course }) => {
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
}

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

export default Course