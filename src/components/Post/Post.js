import React from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'
// import { Avatar } from '@material-ui/core'
import 'bootstrap/dist/css/bootstrap.min.css'
import './post.css'

const Post = ({ user, posts, setPosts }) => {
  const handleClick = event => {
    axios({
      url: `${apiUrl}/posts`,
      method: 'GET',
      headers: {
        'Authorization': `Token token=${user.token}`
      }
    })
      .then(res => setPosts(res.data.posts))
      .catch(console.error)
  }

  const handleDelete = event => {
    const thePost = event.target.id

    axios({
      url: `${apiUrl}/posts/${thePost}`,
      method: 'DELETE',
      headers: {
        'Authorization': `Token token=${user.token}`
      }
    })
      .catch(console.error)
  }

  const postsJsx = posts.map(post => (
    <div key={post._id} className="post">
      <div className="card text-center">
        <div className="card-header">
          <div className="post-avatar">
            <h1>Avatar goes here</h1>
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-title"></h5>
          <p className="card-text">{post.content}</p>
          <a href="#" className="btn btn-primary">@{user.email}</a>
          {user._id === post.owner ? <button
            className="btn btn-danger"
            id={post._id}
            onClick={handleDelete}>Delete</button> : ''}
        </div>
        <div className="card-footer text-muted">
          {post.createdAt}
        </div>
      </div>
    </div>
  ))

  return (
    <div>
      <button onClick={handleClick}>See the tea</button>
      <ul>
        {postsJsx}
      </ul>
    </div>
  )
}

export default Post
