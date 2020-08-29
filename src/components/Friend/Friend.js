import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router'

import axios from 'axios'
import apiUrl from '../../apiConfig'

import Post from '../Post/Post'
import Sidebar from '../Sidebar/Sidebar'
import Layout from '../Layout/Layout'

const Friend = ({ user, match }) => {
  const [posts, setPosts] = useState([])

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
    <Layout>
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
    </Layout>
  )
}

export default withRouter(Friend)
