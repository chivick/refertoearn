import { useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './Header.module.css'
import menuIcon from '../assets/images/menu-icon1.png'

const Header = () => {

  const [showNav, setShowNav] = useState(false)

  const navLinks = 
  <>
    <Link to="/">Home</Link>
    <Link to="/">About</Link>
    <Link to="/">Contact</Link>
    <Link to='/signup'>Signup</Link>
    <Link to='/login'>Login</Link>
  </>

  return (
    <>
    <header id={styles.header}>

      <div id={styles.logo}>Refer2Earn</div>

      <div id={styles.menu}>
          <img src={menuIcon} alt='' onClick={()=>setShowNav(prev=>!prev)} />

          <nav id={styles.desktopNav}>
              {navLinks}
          </nav>
      </div>

    </header>

    {showNav && (
      <nav id={styles.mobileNav}>
          {navLinks}
      </nav>
    )}
    </>

  )
}

export default Header