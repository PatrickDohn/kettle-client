import React from 'react'
import SidebarOption from '../SidebarOptions/SidebarOptions'
import './sidebar.css'
import Button from 'react-bootstrap/Button'
function Sidebar () {
  return (
    <div className="sidebar">
      <SidebarOption active text='Home' />
      <SidebarOption text='Profile' />
      <Button variant="outlined" className="sidebar-tweet" fullWidth>Tweet</Button>
    </div>
  )
}

export default Sidebar
/* <Button type="button" href="#change-password">Change Password</Button>
<Button href="#sign-out">Sign Out</Button> */

/* Icon={HomeIcon}
Icon={AccountCircleIcon} */
