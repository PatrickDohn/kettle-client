import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Home from '../Home/Home'

const authenticatedOptions = (
  <Route path='/home' render={() => (
    <Home />
  )} />
)

const unauthenticatedOptions = (
  <Fragment>
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">kettle</h1>
        <p className="lead">Its tea time ☕️</p>
      </div>
    </div>
    <Button href="#sign-up">Sign Up</Button>
    <Button href="#sign-in">Sign In</Button>
  </Fragment>
)

const FrontPage = ({ user }) => (
  <div>
    { user ? authenticatedOptions : unauthenticatedOptions }
  </div>
)

export default FrontPage
