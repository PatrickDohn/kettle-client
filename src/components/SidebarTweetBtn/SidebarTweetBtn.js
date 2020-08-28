import React, { useState } from 'react'
import './SidebarTweetBtn.css'
import { Button, Modal } from 'react-bootstrap'
import { Avatar } from '@material-ui/core'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import EmojiFoodBeverageIcon from '@material-ui/icons/EmojiFoodBeverage'

const SidebarTweet = ({ user, setPostId }) => {
  const [show, setShow] = useState(false)
  const handleClose = () => {
    setShow(false)
    axios({
      url: `${apiUrl}/posts`,
      method: 'GET',
      headers: {
        'Authorization': `Token token=${user.token}`
      }
    })
  }
  const handleShow = () => setShow(true)

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

    console.log('this is user in sidebar tweets ', user)
    axios({
      url: `${apiUrl}/new-post`,
      method: 'POST',
      headers: {
        'Authorization': `Token token=${user.token}`
      },
      data: { post }
    })
      .then(() => setPost(''))
      .then(() => cancelCourse())
      .catch(console.error)
  }

  const refreshFeed = event => {
    axios({
      url: `${apiUrl}/posts`,
      method: 'GET',
      headers: {
        'Authorization': `Token token=${user.token}`
      }
    })
      .then(res => setPostId(res.data.posts))
      .catch(console.error)
  }

  return (
    <div>
      <Button variant="outlined" className="sidebar-tweet" onClick={handleShow}>
        <span className="full-text">Serve</span>
        <span className="short-text"><EmojiFoodBeverageIcon /></span>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="mod-header" closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body className="mod-body">
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
              onClick={() => {
                handleClose()
                refreshFeed()
              }}
              className="tweet-btn"
              type="submit">
              Serve</Button>
          </form>
        </Modal.Body>
        <Modal.Footer className="mod-footer">
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default SidebarTweet
