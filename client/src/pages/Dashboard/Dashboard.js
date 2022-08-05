import { useContext } from 'react'
import { AuthContext } from '../../context/authContext'

import DashboardHeader from './DashboardHeader'

import styles from './Dashboard.module.css'

const Dashboard = () => {

  const { user } = useContext(AuthContext)

  return (
    <div>
        <DashboardHeader />
        
        <div id={styles.userSummary}>
          <div>Unpaid Referrals: <br/> {user?.unpaidReferrals}</div>
          <div>Total Referrals: <br/> {user?.totalReferrals}</div>
          <div>Unpaid Earnings: <br/> ${user?.unpaidEarnings}</div>
          <div>Total Earnings: <br/> ${user?.totalEarnings}</div>

          <div><button>Withdraw</button></div>
        </div>

        <div id={styles.referralLinks}>
          <span id={styles.heading}>Referral Links:</span> <br/>

          <span className={styles.label}>To homepage:</span>
          <input type='text' value={`http://localhost:3000?ref=${user?.refID}`} readOnly /> <br/>

          <span className={styles.label}>To signup page:</span>
          <input type='text' value={`http://localhost:3000/signup?ref=${user?.refID}`} readOnly />
        </div>

    </div>
  )
}

export default Dashboard