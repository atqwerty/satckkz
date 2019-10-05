import React, { useState } from 'react'
import styled from 'styled-components'

/**
 * Applies styles based on input type
 * @param {string} type
 */
const inputTypeStyles = (type) => {
  switch (type) {
    case 'button':
      return (
        'border-radius: 15%;'
      )
    case 'checkbox':
      break
    case 'search':
      break
    case 'submit':
      break
    case 'text':
      break
  }
}

const InputStyled = styled.input`
  border: none;
  outline: none;
  ${props => inputTypeStyles(props.type)}
`

const Input = ({ type, ...props }) => {
  const [typeOf] = useState(type)

  return (
    <InputStyled
      type={typeOf}
      value='test'
    />
  )
}

export default Input
