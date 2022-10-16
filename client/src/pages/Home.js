import { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom'

import { AuthContext } from '../context/authContext';
import useInput from "../hooks/useInput"

import { login as sendLoginRequest} from '../api'

import Footer from "../components/Footer";
import Header from "../components/Header";
import ReviewsSlider from '../components/ReviewsSlider';
import sponsors from '../assets/sponsors';

import styles from './Home.module.css'

const userReviews = [
    { 
        user: 'Jason Westwood', 
        content: "I didn't know I could make a lot of money from this platform. I wish I had known this website earlier, I would certainly have made much more money. Thanks to the owners for making this site a success."
    },
    { 
        user: 'Sarah McKent', 
        content: "Ever since joining this platform, I've had the best user experience as the website is easy to navigate and easy to understand. And most importantly, making money on this platform has always been a good addition to my income."
    },
    { 
        user: 'Michael Scott', 
        content: "I love the fact that you can make cool money on this platform just by referring freinds and relatives."
    },
]

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
            Get <small>$</small>10 for every person you refer.
            <br/> <button onClick={() => navigate('/signup')}>JOIN NOW </button>
            <span>You get free $2 when you sign up.</span>
        </div>

        <div id={styles.usersInfo}>
            <div>We have paid <br/> <span><small>$</small>1,036,850<small>+</small></span></div>
            <div>To our <br/> <span>225,930<small>+</small></span> <br/> members</div>
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

        <ReviewsSlider data={userReviews} />

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