import React, { useState } from 'react';
import Post from '../Post/Post';

export default function PostDetail(props){
  function getPosts(id){
    console.log(props);
    let array = [ 
      {'content': 'really intersting content'}  ,
      {'content': 'another great content'}  ,
      {'content': 'really asdfasdfasdfa'}  ,
      {'content': 'another one bites the dust'} 
    ]
    return array[id];
  }

  let initialPost = getPosts(props.match.params.id);
  const [post, setPost] = useState(initialPost);
  return (
    <div>
      <Post>{post.content}</Post>
    </div>
  )
}
