import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Feed from '../Feed/Feed'
import './home.css'

function Home ({ user }) {
  return (
    <div className='app'>
      {/* Sidebar */}
      <Sidebar user={user} />

      {/* Feed */}
      <Feed user={user}/>

    </div>
  )
}
export default Home
