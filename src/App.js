import React from 'react'
import './App.css'
import Input from './components/atoms/Input'

function App() {

  const callback = (value = '') => {
    alert('callback answer ' + value)
  }

  return (
    <div className='App'>
      <div style={{ width: '200px', height: '30px', position: 'absolute' }}>
        <Input
          type='button'
          bgColor='orange'
          containedValue='test'
          // callback={callback}
          componentWidth='100%'
          componentHeight='100%'
        />
      </div>
    </div>
  )
}

export default App
