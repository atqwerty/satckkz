import React from 'react'
import './App.css'
import Input from './components/atoms/Input/Input'
import LinkWrapper from './components/atoms/Link/Link'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {

  const callback = (value = '') => {
    alert('callback answer ' + value)
  }

  return (
    <div className='App'>
      <Router>
        <div style={{ width: '200px', height: '30px', position: 'relative', marginTop: '20px', marginLeft: '20px' }}>
          <label>Normal Link:</label>
          <LinkWrapper
            to='/'
            text='normal link'
            textColor='#000000'
            isDecorated={false}
          />
        </div>
        <div style={{ width: '200px', height: '30px', position: 'relative', marginTop: '20px', marginLeft: '20px' }}>
          <label>Decorated Link:</label>
          <LinkWrapper
            to='/'
            text='decorated link'
            textColor='#000000'
            onHoverColor='lightgrey'
            isDecorated={true}
          />
        </div>
      </Router>
      <div style={{ width: '200px', height: '30px', position: 'relative', marginTop: '20px', marginLeft: '20px' }}>
        <label>Button:</label>
        <Input
          type='button'
          bgColor='orange'
          containedValue='button'
          callback={callback}
          componentWidth='100%'
          componentHeight='100%'
        />
      </div>
      <div style={{ width: '200px', height: '30px', position: 'relative', marginTop: '20px', marginLeft: '20px' }}>
        <label>Submit:</label>
        <Input
          type='submit'
          bgColor='orange'
          containedValue='submit'
          callback={callback}
          componentWidth='100%'
          componentHeight='100%'
        />
      </div>
      <div style={{ width: '200px', height: '30px', position: 'relative', marginTop: '30px', marginLeft: '20px' }}>
        <label>Text:</label>
        <Input
          type='text'
          bgColor='orange'
          componentWidth='100%'
          componentHeight='100%'
        />
      </div>
      <div style={{ width: '200px', height: '30px', position: 'relative', marginTop: '30px', marginLeft: '20px' }}>
        <label>Search (maybe redo a little):</label>
        <Input
          type='search'
          bgColor='orange'
          componentWidth='100%'
          componentHeight='100%'
          placeHolder='Search...'
        />
      </div>
      <div style={{ width: '200px', height: '30px', position: 'relative', marginTop: '30px', marginLeft: '20px' }}>
        <label>Checkbox:</label>
        <Input
          type='checkbox'
          bgColor='orange'
          containedValue='test'
          callback={callback}
          componentWidth='20px'
          componentHeight='20px'
        />
        <Input
          type='checkbox'
          bgColor='orange'
          containedValue='test'
          callback={callback}
          componentWidth='20px'
          componentHeight='20px'
        />
        <Input
          type='checkbox'
          bgColor='orange'
          containedValue='test'
          callback={callback}
          componentWidth='20px'
          componentHeight='20px'
        />
      </div>
    </div>
  )
}

export default App
