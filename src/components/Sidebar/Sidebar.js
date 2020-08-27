import React from 'react'
import { withRouter } from 'react-router-dom'
import SidebarOption from '../SidebarOptions/SidebarOptions'
import './sidebar.css'
import EmojiFoodBeverageIcon from '@material-ui/icons/EmojiFoodBeverage'
import Button from 'react-bootstrap/Button'
import HomeIcon from '@material-ui/icons/Home'
import LockIcon from '@material-ui/icons/Lock'
import AccountBoxIcon from '@material-ui/icons/AccountBox'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import SidebarTweet from '../SidebarTweetBtn/SidebarTweetBtn'

class Sidebar extends React.Component {
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
        <button className="homeLinks" onClick={() => this.nextPath('/change-password') }>
          <LockIcon className="home-icon" />
          <SidebarOption Icon={LockIcon} text='ChangePassword'/>
        </button>
        <button className="homeLinks" onClick={() => this.nextPath('/sign-out') }>
          <ExitToAppIcon className="home-icon" />
          <SidebarOption text='Sign Out'/>
        </button>
        <Button variant="outlined" className="sidebar-tweet"><SidebarTweet /></Button>
      </div>
    )
  }
}

export default withRouter(Sidebar)
