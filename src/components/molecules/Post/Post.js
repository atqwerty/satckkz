import React from 'react'
import styled from 'styled-components'

const PostStyled = styled.div`
  margin-top: 10px;
  width: 100%;
  min-height 100px;
  border-radius: 15px;
  background-color: white;
`

const Post = ({ children, props }) => {
  return (
    <PostStyled>
      {children}
    </PostStyled>
  )
}

export default Post
