import { Link } from 'react-router-dom'

import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer>

        <div id={styles.footerLinks}>
          <ul>
            <li><a href='https://github.com/chivick'>About Us</a></li>
            <li><a href='https://github.com/chivick'>Terms and Conditions</a></li>
            <li><a href='https://github.com/chivick'>FAQs</a></li>
            <li><a href='https://github.com/chivick'>Advertise</a></li>
          </ul>
          <ul>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/signup'>Signup</Link></li>
            <li><a href='https://github.com/chivick'>Blog</a></li>
            <li><a href='https://github.com/chivick'>Sitemap</a></li>
          </ul>
          <ul>
            <li><a href='https://www.facebook.com/victor.chivick'>Facebook</a></li>
            <li><a href='mailto:akalonuvictorchimaobi@gmail.com'>Mail</a></li>
            <li><a href='tel:+2347047724333'>Telephone</a></li>
            <li><Link to='/'>LinkedIn</Link></li>
          </ul>
        </div>
        <br/>

        <div id={styles.copyright}>Copyright (c) {new Date().getFullYear()} <a href='https://github.com/chivick'>Victor Chimaobi</a></div>

    </footer>
  )
}

export default Footer