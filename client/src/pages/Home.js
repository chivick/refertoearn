import { useNavigate } from 'react-router-dom'

import useInput from "../hooks/useInput"

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

    const navigate = useNavigate()

    const [emailInputJsx, email] = useInput({type: 'text', placeholder: 'abc@xyz.com'})
    const [passwordInputJsx, password] = useInput({type: 'password', placeholder: '******'})

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

        {/* <div id={styles.loginFormDiv}>
            Login to your account
            <form>
                <label>Email:</label>
                {emailInputJsx}

                <label>Password:</label>
                {passwordInputJsx}

                <button>Login</button>
            </form>
        </div> */}

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