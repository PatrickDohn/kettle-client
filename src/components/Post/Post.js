import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Avatar } from '@material-ui/core'
import 'bootstrap/dist/css/bootstrap.min.css'
import './post.css'
import Edit from '../Edit/Edit'

import moment from 'moment'

const Post = ({ user, posts, setPosts, setDeletedPost, setPostId }) => {
  const handleDelete = event => {
    const thePost = event.target.id

    axios({
      url: `${apiUrl}/posts/${thePost}`,
      method: 'DELETE',
      headers: {
        'Authorization': `Token token=${user.token}`
      }
    })
      .then(res => setDeletedPost(true))
      .catch(console.error)
  }

  const postsJsx = posts.map(post => (
    <div key={post._id} className="post">
      <div className="card text-center">
        <div className="card-header post-header">
          <div className="post-avatar">
            <Avatar src='AccountCircleIcon'></Avatar>
            <Link to={`/profile/${post.owner}`}>{post.ownerName}</Link>
          </div>
        </div>
        <div className="card-body post-body">
          <h5 className="card-title"></h5>
          <p className="card-text">{post.content}</p>

          {user._id === post.owner ? <button
            className="btn btn-danger"
            id={post._id}
            onClick={handleDelete}>Delete</button> : ''}
          {user._id === post.owner
            ? <Edit
              setPostId={setPostId}
              post={post}
              editPost={post._id}
              user={user} /> : ''}
        </div>

        <div className="card-footer text-muted post-footer">
          <p>{moment(post.createdAt).startOf('hour').fromNow()}</p>
        </div>
      </div>
    </div>
  ))

  return (
    <div>
      <ul>
        {postsJsx.reverse()}
      </ul>
    </div>
  )
}

export default Post
