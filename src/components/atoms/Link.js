import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'



function getStylesFromGovno(isGovno, width, height){
  if (!isGovno) {
    return `
      width: ${width}; 
      height: ${height};
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

const LinkRapper = ({
  isGovno,
  text,
  color,
  textColor,
  width,
  height,
  ...props,
}) => {
  const [linkText] = useState(text)
  const [linkIsGovno] = useState(isGovno)
  const [linkColor] = useState(color)
  const [linkTextColor] = useState(textColor)
  const [linkWidth] = useState(width)
  const [linkHeight] = useState(height)

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

export default LinkRapper
