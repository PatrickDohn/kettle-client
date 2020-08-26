import React, { Fragment } from 'react'
// import { Route } from 'react-router-dom'
// import Button from 'react-bootstrap/Button'
// import Home from '../Home/Home'
// import Tweets from '../Tweets/Tweets'
// import axios from 'axios'
// import apiUrl from '../../apiConfig'
// import { Link } from 'react-router-dom'
import Home from '../Home/Home'
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
  // const [post, setPost] = useState([])
  // const handleClick = event => {
  //   axios({
  //     url: `${apiUrl}/profile`,
  //     method: 'GET',
  //     headers: {
  //       'Authorization': `Token token=${user.token}`
  //     }
  //   })
  //     .then(res => setPost(res.data.posts))
  //     .catch(console.error)
  // }
  // const postJsx = post.map(post => (
  //   <li key={post._id}>
  //     <Link to={`/profile/${post._id}`}>{post.content}</Link>
  //   </li>
  // ))
  return (
    <Fragment className="app">
      <Home user={user} />
    </Fragment>
  )
}
export default Profile
