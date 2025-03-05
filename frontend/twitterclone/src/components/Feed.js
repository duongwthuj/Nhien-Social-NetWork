import React from 'react'
import CreatePost from './CreatePost'
import Post from './Post'

function Feed() {
  return (
    <div className="fixed top-0 left-[300px] w-[845px] h-full border-r border-gray-200 overflow-y-auto">
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
