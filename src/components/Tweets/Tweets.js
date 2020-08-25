import React from 'react'
import './tweet.css'
// import { Avatar, Button } from '@material-ui/core'
// import AccountCircleIcon from '@material-ui/icons/AccountCircle'

function Tweets () {
  return (
    <div className="tweets">
      <form>
        <div className="tweet-input">
          <p>Avatar goes here</p>
          <input placeholder="What's the tea?" type="text"/>
        </div>
      </form>
      <button className="tweet-btn">Tweet</button>
    </div>
  )
}

export default Tweets
