import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const InputStyled = styled.input`
  border: none;
  outline: none;
  border-radius: 5px;
  width: ${props => props.width};
  height: ${props => props.height};
  background-image: linear-gradient(${props => props.backgroundColor}, #F87596);
  ${props => props.inputStyles}
`

const Input = ({
  type,
  bgColor,
  containedValue,
  callback,
  componentWidth,
  componentHeight,
  placeHolder,
  ...props
}) => {
  const inputRef = useRef()
  const [typeOf] = useState(type)
  const [backgroundColor] = useState(bgColor)
  const [width] = useState(componentWidth)
  const [height] = useState(componentHeight)
  const [value, setValue] = useState(containedValue)
  const [placeholder] = useState(placeHolder)
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
        setInputStyles(
          `cursor: pointer;
          transition-duration: 0.4s;

          &:hover {
            box-shadow: inset 0 0 0 3px #CE6A85;
          }
          `
        )
        break
      case 'checkbox':
        setIsTextType(false)
        setInputStyles(
          `cursor: pointer;
          appearance: none;
          background-color: #DCDCDC;
          background-image: none;
          border: 1px solid black;
          box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05);
          border-radius: 2px;
          display: inline-block;
          position: relative;

          &:active, :checked:active {
            box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px 1px 3px rgba(0,0,0,0.1);
          }

          &:checked {
            background-image: linear-gradient(${backgroundColor}, #F87596);
            box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05), inset 15px 10px -12px rgba(255,255,255,0.1);
          }
          `
        )
        break
      case 'search':
      case 'text':
        setIsTextType(true)
        setInputStyles(
          `padding-left: 10px;
          padding-right: 10px;
          font-size: 15px;
          transition-duration: 0.4s;

          &:focus {
            border-radius: 1px solid black;
            box-shadow: 0 0 0 3px #CE6A85;
          }
          `
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
    }
  }, [value, isTextType, inputRef])

  return (
    <InputStyled
      ref={inputRef}
      // pass value for checkbox
      onClick={() => callback && callback(value)}
      type={typeOf}
      value={value}
      onChange={e => setValue(e.target.value)}
      backgroundColor={backgroundColor}
      inputStyles={inputStyles}
      width={width}
      height={height}
      placeholder={placeholder}
    />
  )
}

Input.propTypes = {
  type: PropTypes.oneOf(['button', 'checkbox', 'search', 'submit', 'text']).isRequired,
  bgColor: PropTypes.string,
  containedValue: PropTypes.string,
  callback: PropTypes.func,
  componentWidth: PropTypes.string,
  componentHeight: PropTypes.string,
  placeHolder: PropTypes.string
}

export default Input
