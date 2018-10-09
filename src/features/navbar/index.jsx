import React from 'react'
import { NavLink } from 'react-router-dom'

import './styles.css'

export default function Navbar(props) {
  return <ul className="navbar">
    <li><NavLink exact={true} to='/'>Home</NavLink></li>
    <li><NavLink to='/log-entries/new'>New</NavLink></li>
  </ul>
}