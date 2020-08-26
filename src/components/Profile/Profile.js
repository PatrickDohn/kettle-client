import React, { useState, useEffect } from 'react'
// import { Route } from 'react-router-dom'
// import Button from 'react-bootstrap/Button'
// import Home from '../Home/Home'
// import Tweets from '../Tweets/Tweets'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import { Link } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
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
const Profile = props => {
  const [post, setPost] = useState([])
  useEffect(() => {
    axios(`${apiUrl}/profile`)
      .then(res => setPost(res.data.post))
      .catch(console.error)
  }, [])
  const postJsx = post.map(post => (
    <li key={post._id}>
      <Link to={`/profile/${post._id}`}>{post.content}</Link>
    </li>
  ))
  return (
    <div>
      <Sidebar />
      <Post />
      <h1>its working</h1>
      <ul>
        {postJsx}
      </ul>
    </div>
  )
}
export default Profile
