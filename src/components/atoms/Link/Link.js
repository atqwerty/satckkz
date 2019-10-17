import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function getStylesFromGovno (isGovno, width, height) {
  if (!isGovno) {
    return `
      padding: 5px;
      text-decoration: none;
      width: ${width}; 
      height: ${height};
      border-radius: 15px;
      transition: 0.5s ease all;
      &:hover {
        background-color: lightgray;
      }
    `
  }
}

const LinkStyled = styled.div`
  ${props => getStylesFromGovno(props.isGovno, props.width, props.height)}
  position: relative;
  border-radius: 100px;
  background-color: ${props => props.linkColor};
  color: ${props => props.textColor};
  border: none;
  outline: none;
`

const LinkWrapper = ({
  isGovno,
  text,
  color,
  textColor,
  width,
  height,
  ...props
}) => {
  const [linkText] = useState(text)
  const [linkIsGovno] = useState(isGovno)
  const [linkColor] = useState(color)
  const [linkTextColor] = useState(textColor)
  const [linkWidth] = useState(width || '100%')
  const [linkHeight] = useState(height || '100%')

  return (
    <LinkStyled
      linkColor={linkColor}
      textColor={linkTextColor}
      width={linkWidth}
      height={linkHeight}
      isGovno={linkIsGovno}
    >
      <Link {...props}>
        {linkText}
      </Link>
    </LinkStyled>
  )
}

export default LinkWrapper