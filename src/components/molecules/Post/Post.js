import React from 'react'
import styled from 'styled-components'

const PostStyled = styled.li`
  width: 100%;
  min-height 100px;
  border-radius: 15px;
  background-color: white;
`

const Post = () => {
  return (
    <PostStyled/>
  )
}

export default Post
