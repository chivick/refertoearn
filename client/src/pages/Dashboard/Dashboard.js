import styles from './Dashboard.module.css'
import DashboardHeader from './DashboardHeader'

const Dashboard = () => {
  return (
    <div>
        <DashboardHeader />
        
        <div id={styles.userSummary}>
          <div>Unpaid Referrals: <br/> 5</div>
          <div>Total Referrals: <br/> 13</div>
          <div>Unpaid Earnings: <br/> $50</div>
          <div>Total Earnings: <br/> $130</div>

          <div><button>Withdraw</button></div>
        </div>

        <div id={styles.referralLinks}>
          <span id={styles.heading}>Referral Links:</span> <br/>

          <span className={styles.label}>To homepage:</span>
          <input type='text' value='http://localhost:3000?ref=CHIVICK' /> <br/>

          <span className={styles.label}>To signup page:</span>
          <input type='text' value='http://localhost:3000/signup?ref=CHIVICK' />
        </div>

    </div>
  )
}

export default Dashboard