import React from 'react'
import { withRouter } from 'react-router-dom'
import SidebarOption from '../SidebarOptions/SidebarOptions'
import './sidebar.css'
import EmojiFoodBeverageIcon from '@material-ui/icons/EmojiFoodBeverage'
import HomeIcon from '@material-ui/icons/Home'
import LockIcon from '@material-ui/icons/Lock'
import AccountBoxIcon from '@material-ui/icons/AccountBox'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
<<<<<<< HEAD
import SidebarTweet from '../SidebarTweetBtn/SidebarTweetBtn'
=======
import FaceIcon from '@material-ui/icons/Face'
>>>>>>> userpage created

class Sidebar extends React.Component {
  constructor (props) {
    super(props)
    this.state = { user: this.props.user }
  }
  nextPath (path) {
    this.props.history.push(path)
  }
  render () {
    return (
      <div className="sidebar">
        <EmojiFoodBeverageIcon className="twitter-icon" />

        <button className="homeLinks" onClick={() => this.nextPath('/home') }>
          <HomeIcon className="home-icon" />
          <SidebarOption text='Home' />
        </button>
        <button className="homeLinks" onClick={() => this.nextPath('/profile') }>
          <AccountBoxIcon className="home-icon" />
          <SidebarOption text='Profile' />
        </button>
        <button className="homeLinks" onClick={() => this.nextPath('/users') }>
          <FaceIcon className="home-icon" />
          <SidebarOption text='Users' />
        </button>
        <button className="homeLinks" onClick={() => this.nextPath('/change-password') }>
          <LockIcon className="home-icon" />
          <SidebarOption Icon={LockIcon} text='ChangePassword'/>
        </button>
        <button className="homeLinks" onClick={() => this.nextPath('/sign-out') }>
          <ExitToAppIcon className="home-icon" />
          <SidebarOption text='Sign Out'/>
        </button>
        <SidebarTweet user={ this.state.user } />
      </div>
    )
  }
}

export default withRouter(Sidebar)
