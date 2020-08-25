import React from 'react'
import './feed.css'
import Tweets from './Tweets'
import Post from './Post'

function Feed () {
  return (
    <div className="feed">
      { /* Header */ }
      <div className="feed-header">
        <h2>Home</h2>
      </div>

      { /* Tweets */ }
      <Tweets />

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
