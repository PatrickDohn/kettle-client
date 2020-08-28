import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router'

import axios from 'axios'
import apiUrl from '../../apiConfig'

import Post from '../Post/Post'
import Sidebar from '../Sidebar/Sidebar'

const Friend = ({ user, match }) => {
  const [posts, setPosts] = useState([])

  console.log('THIS IS FOR THE FRIENDS CALL', match.params.id)

  useEffect(() => {
    axios({
      url: `${apiUrl}/profile/${match.params.id}`,
      headers: {
        'Authorization': `Token token=${user.token}`
      }
    })
      .then(res => setPosts(res.data.posts))
      .catch(console.error)
  }, [])

  return (
    <div className="app">
      <Sidebar />
      <div className="feed">
        <div className="feed-header">
          <h2 className="topFeed">Friend`s Profile</h2>
        </div>
        <Post
          posts={posts}
          user={user}/>
      </div>
    </div>
  )
}

export default withRouter(Friend)
