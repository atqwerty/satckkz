import React from 'react'
import './App.css'
import Button from './components/atoms/Button'

function App() {

  const callback = () => {
    alert('nigga')
  }

  return (
    <div className='App'>
      <div style={{ width: '20%', height: '10%', position: 'absolute' }}>
        <Button
          text='nigger faggot'
          color='#000000'
          textColor='#ffffff'
          width={200}
          callback={callback}
        />
      </div>
    </div>
  )
}

export default App
