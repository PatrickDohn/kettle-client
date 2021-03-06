import React, { useState, useEffect } from 'react'
// import { Route } from 'react-router-dom'
// import Button from 'react-bootstrap/Button'
// import Home from '../Home/Home'
import axios from 'axios'
import './profile.css'
import apiUrl from '../../apiConfig'
// import { Link } from 'react-router-dom'
import Tweets from '../Tweets/Tweets'
import Post from '../Post/Post'
import Sidebar from '../Sidebar/Sidebar'
import Layout from '../Layout/Layout'

const Profile = ({ user, msgAlert }) => {
  const [postId, setPostId] = useState(null)
  const [posts, setPosts] = useState([])
  const [deletedPost, setDeletedPost] = useState(false)

  useEffect(() => {
    axios({
      url: `${apiUrl}/profile`,
      headers: {
        'Authorization': `Token token=${user.token}`
      }
    })
      .then(res => setPosts(res.data.posts))
      .catch(console.error)
  }, [])
  if (postId) {
    axios({
      url: `${apiUrl}/profile`,
      method: 'GET',
      headers: {
        'Authorization': `Token token=${user.token}`
      }
    })
      .then(res => setPosts(res.data.posts))
      .then(() => setPostId(null))
      .catch(console.error)
  }

  if (deletedPost) {
    axios({
      url: `${apiUrl}/profile`,
      method: 'GET',
      headers: {
        'Authorization': `Token token=${user.token}`
      }
    })
      .then(res => setPosts(res.data.posts))
      .then(() => setDeletedPost(false))
      .catch(console.error)
  }

  return (
    <Layout>
      <div className="app">
        <Sidebar
          user={user}
          setPostId={setPostId}
        />
        <div className="feed">
          <div className="feed-header">
            <h2 className="topFeed">My Profile</h2>
            <Tweets
              postId={postId}
              setPostId={setPostId}
              user={user}
              msgAlert={msgAlert} />
          </div>
          <Post
            posts={posts}
            setPosts={setPosts}
            setDeletedPost={setDeletedPost}
            user={user}
          />
        </div>
      </div>
    </Layout>
  )
}

export default Profile
