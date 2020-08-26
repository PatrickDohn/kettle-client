import React, { useState } from 'react'
// import { Route } from 'react-router-dom'
// import Button from 'react-bootstrap/Button'
// import Home from '../Home/Home'
// import Tweets from '../Tweets/Tweets'
import axios from 'axios'
import apiUrl from '../../apiConfig'
// import { Link } from 'react-router-dom'
import Tweets from '../Tweets/Tweets'
import Post from '../Post/Post'
// class Profile extends Component {
//   constructor (props, user) {
//     super(props)
//     this.state = {
//       posts: []
//     }
//   }
//   componentDidMount () {
//     // make a GET request for all of the books
//     axios(`${apiUrl}/profile`)
//       .then(res => this.setState({ posts: res.data.posts }))
//       .catch(console.error)
//   }
//   render () {
//     return (
//       <div>
//         <Sidebar />
//         <Post user={user} />
//       </div>
//     )
//   }
// }
const Profile = (props, user) => {
  const [postId, setPostId] = useState(null)
  const [posts, setPosts] = useState([])
  const [deletedPost, setDeletedPost] = useState(false)

  if (postId) {
    axios({
      url: `${apiUrl}/profile`,
      method: 'GET',
      headers: {
        'Authorization': `Token token=${user.token}`
      }
    })
      .then(res => setPosts(res.data.posts))
      .then(() => setPostId(null))
      .catch(console.error)
  }

  if (deletedPost) {
    axios({
      url: `${apiUrl}/profile`,
      method: 'GET',
      headers: {
        'Authorization': `Token token=${user.token}`
      }
    })
      .then(res => setPosts(res.data.posts))
      .then(() => setDeletedPost(false))
      .catch(console.error)
  }

  return (
    <div className="feed">
      { /* Header */ }
      <div className="feed-header">
        <h2 className="topFeed">Home</h2>
        <Tweets
          postId={postId}
          setPostId={setPostId}
          user={user}/>
      </div>

      <Post
        posts={posts}
        setPosts={setPosts}
        setDeletedPost={setDeletedPost}
        user={user}/>
    </div>
  )
}

export default Profile
