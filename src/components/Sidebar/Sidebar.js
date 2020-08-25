import React from 'react'
import { withRouter } from 'react-router-dom'
import SidebarOption from '../SidebarOptions/SidebarOptions'
import './sidebar.css'
import Button from 'react-bootstrap/Button'

class Sidebar extends React.Component {
  nextPath (path) {
    this.props.history.push(path)
  }
  render () {
    return (
      <div className="sidebar">
        <button className="homeLinks" onClick={() => this.nextPath('/home') }>
          <SidebarOption text='Home' />
        </button>
        <button className="homeLinks" onClick={() => this.nextPath('/profile') }>
          <SidebarOption text='Profile' />
        </button>
        <button className="homeLinks" onClick={() => this.nextPath('/change-password') }>
          <SidebarOption text='ChangePassword'/>
        </button>
        <button className="homeLinks" onClick={() => this.nextPath('/sign-out') }>
          <SidebarOption text='Sign Out'/>
        </button>
        <Button variant="outlined" className="sidebar-tweet" fullWidth>Tweet</Button>
      </div>
    )
  }
}

export default withRouter(Sidebar)
/* <Button type="button" href="#change-password">Change Password</Button>
<Button href="#sign-out">Sign Out</Button> */

/* Icon={HomeIcon}
Icon={AccountCircleIcon} */
