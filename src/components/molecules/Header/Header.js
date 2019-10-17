import React, { useState } from 'react'
import styled from 'styled-components'
import Input from '../../atoms/Input/Input'

const StyledHeader = styled.div`
  margin: 0;
  width: 100%;
  height: 100px;
  background-color: palevioletred;
  display: grid;
  grid-template-columns: 20% 10% 40% 10% 10% 10%;

  & > div {
    align-self: center;
    text-align: center;
  }
`

const Header = (props) => {
  const [value, setValue] = useState('')

  const handleChange = e => {
    setValue(e.target.value)
  }

  return (
    <StyledHeader>
      <div className='header-part'><h1>Stackkz</h1></div>
      <div className='header-part' />
      <div className='header-part'>
        <Input
          onChange={handleChange}
          value={value}
          name='search'
          type='search'
          placeHolder='Search...'
          bgColor='white'
          componentWidth='100%'
          componentHeight='100%'
        />
      </div>
      <div className='header-part' />
      <div className='header-part'>
        <Input
          value='Login'
          type='button'
          bgColor='palevioletred'
          componentWidth='80%'
          componentHeight='100%'
        />
      </div>
      <div className='header-part'>
        <Input
          value='Register'
          type='button'
          bgColor='#69C7B5'
          componentWidth='80%'
          componentHeight='100%'
        />
      </div>
    </StyledHeader>
  )
}

export default Header
