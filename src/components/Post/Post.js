import React from 'react'
// import { Avatar } from '@material-ui/core'
import 'bootstrap/dist/css/bootstrap.min.css'
import './post.css'

function Post () {
  return (
    <div className="post">
      <div className="card text-center">
        <div className="card-header">
          <div className="post-avatar">
            <h1>Avatar goes here</h1>
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-title"></h5>
          <p className="card-text">This is my first tweet and I hope it goes well</p>
          <a href="#" className="btn btn-primary">@username</a>
        </div>
        <div className="card-footer text-muted">
          12hrs ago
        </div>
      </div>
    </div>
  )
}

export default Post
