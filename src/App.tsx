import { useState } from 'react'
import './App.css'
import { Counter } from './components/Counter'
import { LanguageSwitch } from './components/LanguageSwitch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LanguageSwitch></LanguageSwitch>
      <Counter></Counter>
    </>
  )
}

export default App
