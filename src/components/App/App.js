import React, { Fragment, useState } from 'react'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'
import FrontPage from '../FrontPage/FrontPage'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import SignOut from '../SignOut/SignOut'
// import Home from '../Home/Home'
import ChangePassword from '../ChangePassword/ChangePassword'
import Profile from '../Profile/Profile'
import Friend from '../Friend/Friend'
import UserList from '../Users/UserList'

const App = () => {
  const [user, setUser] = useState(null)
  const [msgAlerts, setMsgAlerts] = useState([])
  const [postId, setPostId] = useState(null)

  const clearUser = () => setUser(null)

  const msgAlert = ({ heading, message, variant }) => {
    setMsgAlerts([...msgAlerts, { heading, message, variant }])
  }
  return (
    <Fragment>
      <FrontPage user={user} msgAlert={msgAlert} />
      {msgAlerts.map((msgAlert, index) => (
        <AutoDismissAlert
          key={index}
          heading={msgAlert.heading}
          variant={msgAlert.variant}
          message={msgAlert.message}
        />
      ))}
      <AuthenticatedRoute user={user} exact path='/profile' render={() => (
        <Profile user={user} msgAlert={msgAlert} />
      )} />
      <AuthenticatedRoute user={user} exact path='/profile/:id' render={() => (
        <Friend user={user} />
      )} />
      <AuthenticatedRoute user={user} path='/change-password' render={() => (
        <ChangePassword msgAlert={msgAlert} user={user} />
      )} />
      <AuthenticatedRoute user={user} path='/users' render={() => (
        <UserList user={user} postId={postId} setPostId={setPostId} />
      )} />
      <main className="container">
        <Route path='/sign-up' render={() => (
          <SignUp msgAlert={msgAlert} setUser={setUser} />
        )} />
        <Route path='/sign-in' render={() => (
          <SignIn msgAlert={msgAlert} setUser={setUser} />
        )} />
        <AuthenticatedRoute user={user} path='/sign-out' render={() => (
          <SignOut msgAlert={msgAlert} clearUser={clearUser} user={user} />
        )} />
      </main>
    </Fragment>
  )
}

export default App
