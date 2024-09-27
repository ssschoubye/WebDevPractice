import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name} your age is {props.age}</p>
      </div>
  )
}

const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  const name = 'Peter'
  const age = 10
  console.log(now, a +b)

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name='Maya' age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  )
}

export default App
