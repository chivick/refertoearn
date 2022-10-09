import { useState } from 'react'

import styles from './Header.module.css'
import menuIcon from '../assets/images/menu-icon1.png'
import Loader from './Loader'

const Header = () => {

  const [showNav, setShowNav] = useState(false)

  return (
    <>
    <header id={styles.header}>

      <div id={styles.logo}>Refer2Earn</div>

      <div id={styles.menu}>
          <img src={menuIcon} alt='' onClick={()=>setShowNav(prev=>!prev)} />

          <nav id={styles.desktopNav}>
              <a href="/">Home</a>
              <a href="/">About</a>
              <a href="/">Contact</a>
          </nav>
      </div>

    </header>
    <Loader />

    {showNav && (
      <nav id={styles.mobileNav}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
      </nav>
    )}
    </>

  )
}

export default Header