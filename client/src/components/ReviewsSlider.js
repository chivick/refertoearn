import { useState } from 'react'

import photo from '../assets/images/photo.jpg'
import styles from './ReviewsSlider.module.css'

const ReviewsSlider = ({ data }) => {
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
                <div><img src={photo} alt={data[currentIndex].user} /></div>
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