import React, { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Feed from '../Feed/Feed'
import Layout from '../Layout/Layout'
import './home.css'

const Home = ({ user, msgAlert }) => {
  const [postId, setPostId] = useState(null)

  return (
    <Layout>
      <div className='app'>
        <Sidebar
          user={user}
          setPostId={setPostId}
          msgAlert={msgAlert}
        />

        {/* Feed */}
        <Feed
          user={user}
          postId={postId}
          setPostId={setPostId}
          msgAlert={msgAlert}
        />
      </div>
    </Layout>
  )
}
export default Home
