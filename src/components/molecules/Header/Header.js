import React, { useState } from 'react'
import styled from 'styled-components'
import Input from '../../atoms/Input/Input'
import LinkWrapper from '../../atoms/Link/Link'
import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'

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

const Header = ({ loginCallback, registerCallback, props }) => {
  const [value, setValue] = useState('')
  const store = useSelector(store => store)

  const handleChange = e => {
    setValue(e.target.value)
  }

  return (
    <StyledHeader>
      {/* <div className='header-part'><h1>Stackkz</h1></div> */}
      <div className='header-part'><Link style={{ textDecoration:'none', color: 'white' }} to='/'><h1>Stackkz</h1></Link></div>
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
      {store.authentication.loggedIn
        ? <div className='header-part'>
          <p>hi {store.authentication.user.username}</p>
        </div>
        : <div className='header-part'>
          <Input
            value='Login'
            type='button'
            callback={loginCallback}
            bgColor='palevioletred'
            componentWidth='80%'
            componentHeight='100%'
          />
        </div>}
      {store.authentication.loggedIn
        ? <LinkWrapper to='/login'>Logout</LinkWrapper>
        : <div className='header-part'>
          <Input
            value='Register'
            type='button'
            bgColor='#69C7B5'
            callback={registerCallback}
            componentWidth='80%'
            componentHeight='100%'
          />
        </div>}
    </StyledHeader>
  )
}

// function mapState(state) {
//   const { users, authentication } = state;
//   const { user } = authentication;
//   return { user, users };
// }

// const actionCreators = {
//   getUsers: userActions.getAll,
//   deleteUser: userActions.delete
// }

export default Header
