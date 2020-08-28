import React, { useState } from 'react'
import './edit.css'
import { Button, Modal } from 'react-bootstrap'
import apiUrl from '../../apiConfig'
import axios from 'axios'
import EditIcon from '@material-ui/icons/Edit'

const Edit = ({ user, postId, setPostId, editPost }) => {
  const [show, setShow] = useState(false)
  const [post, setPost] = useState('')

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

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
    axios({
      url: `${apiUrl}/posts/${editPost}`,
      method: 'PATCH',
      headers: {
        'Authorization': `Token token=${user.token}`
      },
      data: { post }
    })
      .then(() => cancelCourse())
      .then(() => setPostId(''))
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
      <Button variant="outline-primary" size="sm" onClick={handleShow}>
        <EditIcon />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="edit-header" closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body className="edit-body">
          <form id="create-post-form" onSubmit={handleSubmit}>
            <div className="tweet-input">
              <input
                id="tweetField"
                placeholder="What's the tea?"
                type="text"
                name="content"
                value={post.content}
                onChange={handleChange} />
            </div>
            <button
              onClick={() => {
                handleClose()
                refreshFeed()
              }
              }
              className="tweet-btn"
              type="submit">Serve</button>
          </form>
        </Modal.Body>
        <Modal.Footer className="edit-footer">
        </Modal.Footer>
      </Modal>
    </div>
  )
}
export default Edit
