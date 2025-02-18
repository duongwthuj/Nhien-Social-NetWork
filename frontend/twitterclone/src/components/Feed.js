import React from 'react'
import CreatePost from './CreatePost'
import Post from './Post'

function Feed() {
  return (
    <div className='w-[50%] border-r border-l'>
      <div>
        <CreatePost />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  )
}

export default Feed
