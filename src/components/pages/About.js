import React from 'react'

function About() {
  return (
    // Don't need a div, so we make this 'ghost' element just so jsx can run
    <React.Fragment>
      <h1>About</h1>
      <p>This is the TodoList app</p>
    </React.Fragment>
  )
}

export default About;
