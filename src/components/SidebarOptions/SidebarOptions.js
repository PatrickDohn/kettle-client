import React from 'react'
import './sidebaroptions.css'

function SidebarOption ({ active, text, Icon }) {
  return (
    <div className={`sidebarOption ${active && 'sidebarOption__active'}`}>
      <h2>{text}</h2>
    </div>
  )
}

export default SidebarOption
