import React from 'react'
import styled from 'styled-components'

const PostStyled = styled.div`
  margin-left: 25%;
  margin-top: 100px;
  width: 50%;
  min-height 100px;
  border-radius: 15px;
  background-color: white;
`

const Post = ({ children, props }) => {
  return (
    <PostStyled>
      <h1 style={{ textAlign: 'center' }}>
        {children}
      </h1>
    </PostStyled>
  )
}

export default Post
