import React, { useState } from 'react'
import './tweet.css'
import axios from 'axios'
import { Avatar } from '@material-ui/core'

import apiUrl from '../../apiConfig'
// import { Avatar, Button } from '@material-ui/core'
// import AccountCircleIcon from '@material-ui/icons/AccountCircle'

const Tweets = ({ user, postId, setPostId }) => {
  const [post, setPost] = useState('')

  const handleChange = event => {
    event.persist()

    setPost(prevPost => {
      const updatedPost = { [event.target.name]: event.target.value, ownerName: user.email }

      const editedPost = Object.assign({}, prevPost, updatedPost)

      return editedPost
    })
  }

  const handleSubmit = event => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/new-post`,
      method: 'POST',
      headers: {
        'Authorization': `Token token=${user.token}`
      },
      data: { post }
    })
      .then(res => setPostId(res.data.post._id))
      .then(() => setPost(''))
      .catch(console.error)
  }

  return (
    <div className="tweets">
      <form onSubmit={handleSubmit}>
        <div className="tweet-input">
          <Avatar src='AccountCircleIcon'></Avatar>
          <input
            id="tweetField"
            placeholder="What's the tea?"
            type="text"
            name="content"
            value={post.content}
            onChange={handleChange} />
        </div>
        <button
          className="tweet-btn"
          type="submit">Serve</button>
      </form>
    </div>
  )
}

export default Tweets
