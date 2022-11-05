import { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion';

import { AuthContext } from '../context/authContext';
import useInput from "../hooks/useInput"

import { login as sendLoginRequest} from '../api'

import Footer from "../components/Footer";
import Header from "../components/Header";
import ReviewsSlider from '../components/ReviewsSlider';
import sponsors from '../assets/sponsors';

import styles from './Home.module.css'
import { joinButtonVariants, usersInfoVariants } from '../others/variants'

const Home = () => {

    const { setUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const [emailInputJsx, email] = useInput({type: 'text', placeholder: ''})
    const [passwordInputJsx, password] = useInput({type: 'password', placeholder: ''})

    const login = async(e) => {
        e.preventDefault()
        
        try {
            const response = await sendLoginRequest({ email, password })

            if(response) {

                localStorage.removeItem('referrer')
      
                localStorage.setItem('user',JSON.stringify(response.data))
      
                setUser(response.data)
                navigate('/dashboard')
              }
            
        } catch (error) {
            if(error.response) {
                alert(error.response.data)
            } else {
                console.log(error.message)
            }
        }
    }
  return (
    <>
        <Header />

        <div id={styles.joinInfo}>
            Get <small>$</small>10 for every person you refer.<br/>
            <motion.button onClick={() => navigate('/signup')}
                variants={joinButtonVariants}
                animate='animate'
            >JOIN NOW </motion.button>
            <span>You get free $2 when you sign up.</span>
        </div>

        <div id={styles.usersInfo}>
            <div>
                We have paid <br/> 
                <motion.span
                    variants={usersInfoVariants}
                    initial='initial'
                    animate='animate'
                >
                    <small>$</small>1,036,850<small>+</small>
                </motion.span>
            </div>
            <div>
                To our <br/> 
                <motion.span
                    variants={usersInfoVariants}
                    initial='initial'
                    animate='animate'
                >
                    225,930<small>+</small>
                </motion.span> 
                members
            </div>
        </div>

        <div id={styles.loginFormDiv}>
            <span>Login to your account</span>
            <form onSubmit={login}>
                <label>Email:</label>
                {emailInputJsx}

                <label>Password:</label>
                {passwordInputJsx}
                
                <div><button>Login</button></div>

            </form>
            <div>Don't have an account? <Link to='/signup'>Register</Link></div>
        </div>

        <ReviewsSlider />

        <div id={styles.sponsors}>
            <span>Sponsored by:</span>

            <div id={styles.sponsorsLogo}>
                {sponsors.map((sponsor, index) => {
                    return <div><img src={sponsor} alt={`sponsor${index+1}`} /></div>
                })}
            </div>
        </div>

        <Footer />
        
    </>
  )
}

export default Home