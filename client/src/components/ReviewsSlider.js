import { useState } from 'react'
import styles from './ReviewsSlider.module.css'

const ReviewsSlider = ({ data }) => {
    const totalData = data.length
    const [currentIndex, setCurrentIndex] = useState(0)

    const prevHandler = (e) => {
        
    }
    const nextHandler = (e) => {
            
    }

  return (
    <>
    <div id={styles.userReviews}>
        <span>Here's what our users have to say</span> <hr/>

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
    </>
  )
}

export default ReviewsSlider