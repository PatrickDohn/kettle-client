import React from 'react'
import './layout.css'

const Layout = props => (
  <div>
    <div className="jumbotron jumbotron-fluid jumbo-home">
      <div className="container frontPageHeading">
        <h1 className="display-4 frontPageTitle">kettle</h1>
        <p className="lead frontPageSubTitle anim-typewriter">Its tea time</p>
      </div>
    </div>

    {props.children}

  </div>
)

export default Layout
