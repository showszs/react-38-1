import React from 'react'
import { useState } from 'react'
import './App.css'
import Button from './components/Button.jsx'

function App(props) {
  const { text } = props
  const [button, setButton] = useState(text)
  const clickHandler = () => {
    setButton('React clicked')
  }

  return <Button text={button} onClick={clickHandler} />
}

export default App
