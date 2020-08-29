import React, { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Feed from '../Feed/Feed'
import Layout from '../Layout/Layout'
import './home.css'

const Home = ({ user }) => {
  const [postId, setPostId] = useState(null)

  return (
    <Layout>
      <div className='app'>
        <Sidebar user={user}
          setPostId={setPostId}
        />

        {/* Feed */}
        <Feed user={user}
          postId={postId}
          setPostId={setPostId}
        />
      </div>
    </Layout>
  )
}
export default Home
