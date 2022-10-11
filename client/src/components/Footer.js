import { Link } from 'react-router-dom'

import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer>

        <div id={styles.footerLinks}>
          <ul>
            <li><Link to='/'>About Us</Link></li>
            <li><Link to='/'>Terms and Conditions</Link></li>
            <li><Link to='/'>FAQs</Link></li>
            <li><Link to='/'>Advertise</Link></li>
          </ul>
          <ul>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/signup'>Signup</Link></li>
            <li><Link to='/'>Blog</Link></li>
            <li><Link to='/'>Sitemap</Link></li>
          </ul>
          <ul>
            <li><Link to='/'>Facebook</Link></li>
            <li><Link to='/'>Twitter</Link></li>
            <li><Link to='/'>Instagram</Link></li>
            <li><Link to='/'>LinkedIn</Link></li>
          </ul>
        </div>
        <br/>

        <div id={styles.copyright}>Copyright (c) {new Date().getFullYear()}</div>

    </footer>
  )
}

export default Footer