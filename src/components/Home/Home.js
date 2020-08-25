import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Feed from '../Feed/Feed'
import './home.css'

function Home () {
  return (
    <div className='app'>
      {/* Sidebar */}
      <Sidebar />

      {/* Feed */}
      <Feed />

    </div>
  )
}
export default Home
