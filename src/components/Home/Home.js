import React, { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Feed from '../Feed/Feed'
import './home.css'

const Home = ({ user }) => {
  const [postId, setPostId] = useState(null)

  return (
    <div className='app'>
      {/* Sidebar */}
      <Sidebar user={user}
        setPostId={setPostId}
      />

      {/* Feed */}
      <Feed user={user}
        postId={postId}
        setPostId={setPostId}
      />

    </div>
  )
}
export default Home
