import React, { useState } from 'react'
import './tweet.css'
import axios from 'axios'
import { Avatar } from '@material-ui/core'
import { Button } from 'react-bootstrap'

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

  const cancelCourse = () => {
    document.getElementById('create-post-form').reset()
  }

  const handleSubmit = event => {
    event.preventDefault()

    console.log('this is user in tweets ', user)
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
      .then(() => cancelCourse())
      .catch(console.error)
  }

  return (
    <div className="tweets">
      <form id="create-post-form" onSubmit={handleSubmit}>
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
        <Button
          className="tweet-btn"
          type="submit">Serve</Button>
      </form>
    </div>
  )
}

export default Tweets
