import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer>

        <div>
          <ul>
            <li>About Us</li>
            <li>Advertise</li>
            <li>Terms and Conditions</li>
            <li>FAQs</li>
          </ul>
        </div>
        <br/>
        <div>Copyright (c) {new Date().getFullYear()}</div>

        {styles && null}
    </footer>
  )
}

export default Footer