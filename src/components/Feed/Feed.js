import React from 'react'
import './feed.css'
import Tweets from '../Tweets/Tweets'
import Post from '../Post/Post'

function Feed ({ user }) {
  return (
    <div className="feed">
      { /* Header */ }
      <div className="feed-header">
        <h2>Home</h2>
      </div>

      { /* Tweets */ }
      <Tweets user={user}/>

      { /* Posts */ }

      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default Feed
