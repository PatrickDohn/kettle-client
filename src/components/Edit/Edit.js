import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import apiUrl from '../../apiConfig'
import axios from 'axios'

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
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
export default Edit
