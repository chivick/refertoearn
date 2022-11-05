import { useState } from 'react'

import image1 from '../assets/images/image1.jpeg'
import image2 from '../assets/images/image2.jpeg'
import image3 from '../assets/images/image3.jpeg'
import styles from './ReviewsSlider.module.css'

const data = [
  { 
      user: 'Jason Westwood',
      image: image1, 
      content: "I didn't know I could make a lot of money from this platform. I wish I had known this website earlier, I would certainly have made much more money. Thanks to the owners for making this site a success."
  },
  { 
      user: 'Sarah McKent',
      image: image3,
      content: "Ever since joining this platform, I've had the best user experience as the website is easy to navigate and easy to understand. And most importantly, making money on this platform has always been a good addition to my income."
  },
  { 
      user: 'Michael Scott',
      image: image2,
      content: "I love the fact that you can make cool money on this platform just by referring freinds and relatives."
  },
]

const ReviewsSlider = () => {
    const totalData = data.length
    const [currentIndex, setCurrentIndex] = useState(0)

    const prevHandler = (e) => {
        if(currentIndex === 0) {
          setCurrentIndex(totalData - 1)
        }
        if(currentIndex > 0) {
          setCurrentIndex(curr => curr - 1)
        }
    }

    const nextHandler = (e) => {
          if((currentIndex + 1) < totalData) {
            setCurrentIndex(curr => curr + 1)
          }  else {
            setCurrentIndex(0)
          }
    }

  return (
    <>
    <div id={styles.userReviews}>
      <span>Here's what our users have to say</span>
      <div>

        <div id={styles.main}>

            <div id={styles.left}><button onClick={prevHandler}>&lt;</button></div>

            <div className={styles.review}>
                <div><img src={data[currentIndex].image} alt={data[currentIndex].user} /></div>
                <div>{data[currentIndex].user}</div>
                <div>{data[currentIndex].content}</div>
            </div>

            <div id={styles.right}><button onClick={nextHandler}>&gt;</button></div>
        </div>
      </div>

    </div>
    </>
  )
}

export default ReviewsSlider