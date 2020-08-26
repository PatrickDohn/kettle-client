import React, { useState } from 'react'
import './feed.css'
import Tweets from '../Tweets/Tweets'
import Post from '../Post/Post'
import axios from 'axios'
import apiUrl from '../../apiConfig'

const Feed = ({ user }) => {
  const [postId, setPostId] = useState(null)
  const [posts, setPosts] = useState([])
  const [deletedPost, setDeletedPost] = useState(false)

  if (postId) {
    axios({
      url: `${apiUrl}/posts`,
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
      url: `${apiUrl}/posts`,
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
    <div className="feed">
      { /* Header */ }
      <div className="feed-header">
        <h2 className="topFeed">Home</h2>
        <Tweets
          postId={postId}
          setPostId={setPostId}
          user={user}/>
      </div>

      <Post
        posts={posts}
        setPosts={setPosts}
        setDeletedPost={setDeletedPost}
        user={user}/>
    </div>
  )
}

export default Feed
