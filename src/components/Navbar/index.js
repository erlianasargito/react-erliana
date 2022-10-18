import React from 'react'
import '../../styles/components/NavbarComp.css'

export const Navbar = () => {
  return (
    <nav className='navbar-wrapper'>
      <ul className='menu-navbar'>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Profile</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
