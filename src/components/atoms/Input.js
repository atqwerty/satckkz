import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const InputStyled = styled.input`
  border: none;
  outline: none;
  border-radius: 5px;
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: ${props => props.backgroundColor};
  ${props => props.inputStyles}
`

const Input = ({
  type,
  bgColor,
  containedValue,
  callback,
  componentWidth,
  componentHeight,
  ...props
}) => {
  const inputRef = useRef()
  const [typeOf] = useState(type)
  const [backgroundColor] = useState(bgColor)
  const [width] = useState(componentWidth)
  const [height] = useState(componentHeight)
  const [value, setValue] = useState(containedValue)
  const [inputStyles, setInputStyles] = useState('')
  const [isTextType, setIsTextType] = useState(false)

  /**
   * Applies styles and minor changes for component
   */
  useEffect(() => {
    switch (typeOf) {
      case 'button':
      case 'submit':
        setIsTextType(false)
        break
      case 'checkbox':
        setIsTextType(false)
        break
      case 'search':
      case 'text':
        setIsTextType(true)
        setInputStyles(
          `padding-left: 10px;
          padding-right: 10px;
          font-size: 15px;
          input=`
        )
        break
      default:
        break
    }
  }, [typeOf, isTextType])

  /**
   * Used only for input type text and search
   * Ignore Warning
   */
  useEffect(() => {
    if (isTextType) {
      // For text inputs
      console.log(value)
    } else {
      console.log(value)
      // TODO: fot buttons and checkboxes
    }
  }, [value, isTextType, inputRef])

  return (
    <InputStyled
      ref={inputRef}
      onClick={() => callback && callback()}
      type={typeOf}
      value={value}
      onChange={e => setValue(e.target.value)}
      backgroundColor={backgroundColor}
      inputStyles={inputStyles}
      width={width}
      height={height}
    />
  )
}

Input.propTypes = {
  type: PropTypes.oneOf(['button', 'checkbox', 'search', 'submit', 'text']).isRequired,
  bgColor: PropTypes.string,
  containedValue: PropTypes.string,
  callback: PropTypes.func,
  componentWidth: PropTypes.string,
  componentHeight: PropTypes.string
}

export default Input
