import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function getStylesFromDecorated (isDecorated, color) {
  if (isDecorated) {
    return `
      padding: 5px;
      box-sizing: border-box;
      border-radius: 15px;
      transition: 0.5s ease all;
      &:hover {
        background-color: ${color};
      }
    `
  }
}

const LinkStyled = styled.div`
  ${props => getStylesFromDecorated(props.isDecorated, props.linkOnHoverColor)}
  width: ${props => props.width}; 
  height: ${props => props.height};
  text-decoration: none;
  position: relative;
  color: ${props => props.textColor};
  border: none;
  outline: none;
`

const LinkWrapper = ({
  isDecorated,
  text,
  onHoverColor,
  textColor,
  width,
  height,
  children,
  ...props
}) => {
  const [linkText] = useState(text)
  const [linkIsDecorated] = useState(isDecorated)
  const [linkOnHoverColor] = useState(onHoverColor)
  const [linkTextColor] = useState(textColor)
  const [linkWidth] = useState(width || 'fit-content')
  const [linkHeight] = useState(height || 'fit-content')

  return (
    <LinkStyled
      linkOnHoverColor={linkOnHoverColor}
      textColor={linkTextColor}
      width={linkWidth}
      height={linkHeight}
      isDecorated={linkIsDecorated}
    >
      <Link {...props}>
        {children}
      </Link>
    </LinkStyled>
  )
}

export default LinkWrapper
