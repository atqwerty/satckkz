import React from 'react'
import './App.css'
import Button from './components/atoms/Button'

function App() {

  const callback = () => {
    alert('nigga')
  }

  return (
    <div className='App'>
      <Button
        text='nigger faggot'
        color='#000000'
        textColor='#ffffff'
        width={50}
        callback={callback}
      />
    </div>
  )
}

export default App
