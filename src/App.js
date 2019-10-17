import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css'
import Button from './components/atoms/Button'
import LinkRapper from './components/atoms/Link'

function App() {

  const callback = () => {
    alert('nigga')
  }

  return (
    <div className='App'>
      <Router>
        <LinkRapper to='/'
          text='nigger faggot'
          color='#000000'
          textColor='#ffffff'
          isGovno={true}
          width='50%'
          height='1000px'
        />
    </Router>
    </div>
  )
}

export default App
