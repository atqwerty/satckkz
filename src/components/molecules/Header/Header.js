import React, { useState } from 'react'
import styled from 'styled-components'
import Input from '../../atoms/Input/Input'

const StyledHeader = styled.div`
  margin: 0;
  width: 100%;
  height: 100px;
  background-color: gray;
  display: grid;
  grid-template-columns: 10% 20% 40% 20% 10%;

  & > div {
    align-self: center;
    // justify-self: center;
  }
`

const Header = (props) => {
  const [value, setValue] = useState('')

  const handleChange = e => {
    setValue(e.target.value)
  }

  return (
    <StyledHeader>
      <div className='header-part' />
      <div className='header-part'><h1 style={{ textAlign: 'center' }}>Stackkz</h1></div>
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
      <div className='header-part'>asdf</div>
      <div className='header-part'>asdf</div>
    </StyledHeader>
  )
}

export default Header
