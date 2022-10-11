import { useNavigate } from 'react-router-dom'

import Footer from "../components/Footer";
import Header from "../components/Header";

import styles from './Home.module.css'
import ReviewsSlider from '../components/ReviewsSlider';

const userReviews = [
    { 
        user: 'Jason Westwood', 
        content: "I didn't know I could make a lot of money from this platform. I wish I had known this website earlier, I would certainly have made much more money. Thanks to the owners for making this site a success."
    },
    { 
        user: 'Sarah McKent', 
        content: "Ever since joining this platform, I've had the best user experience as the website is easy to navigate and easy to understand the functionality. And most importantly, making money on this platform has always been a good addition to my income."
    },
    { 
        user: 'Michael Scott', 
        content: "I love the fact that you can make cool money on this platform just by referring freinds and relatives."
    },
]

const Home = () => {

    const navigate = useNavigate()

  return (
    <>
        <Header />

        <div id={styles.joinInfo}>
            Get <small>$</small>10 for every person you refer.
            <br/> <button onClick={() => navigate('/signup')}>JOIN NOW </button>
            <span>You get free $2 when you sign up.</span>
        </div>

        <div id={styles.usersInfo}>
            <div>We have paid <br/> <span><small>$</small>3,836,800<small>+</small></span></div>
            <div>To our <br/> <span>796,930<small>+</small></span> <br/> members</div>
        </div>

        <ReviewsSlider data={userReviews} />

        <div id='sponsors' style={{display: 'none'}}>
            In collaboration with: <br/>
            AliWest <br/>
            MunPay <br/>
            ZetCo
        </div>

        <Footer />
        
    </>
  )
}

export default Home