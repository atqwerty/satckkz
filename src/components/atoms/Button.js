import React, { useState } from 'react'
import styled from 'styled-components'

const ButtonStyled = styled.button`
  position: relative;
  border-radius: 10px;
  background-color: ${props => props.buttonColor};
  color: ${props => props.textColor};
  border: none;
  outline: none;
  width: ${props => props.width || 100}%;
  height: ${props => props.height || 100}%;
`

const Button = ({
  text,
  color,
  textColor,
  width,
  height,
  callback,
  props
}) => {
  const [buttonText] = useState(text)
  const [buttonColor] = useState(color)
  const [buttonTextColor] = useState(textColor)
  const [buttonWidth] = useState(width)
  const [buttonHeight] = useState(height)

  return (
    <ButtonStyled
      onClick = {() => callback()}
      buttonColor={buttonColor}
      textColor={buttonTextColor}
      width={buttonWidth}
      height={buttonHeight}
    >
      {buttonText}
    </ButtonStyled>
  )
}

export default Button
