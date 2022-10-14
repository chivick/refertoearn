import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'
import { getUserDetails } from '../../api'

import DashboardHeader from './DashboardHeader'

import styles from './Dashboard.module.css'

const Dashboard = () => {

  const { user, setUser } = useContext(AuthContext)

  const navigate = useNavigate()
  const siteUrl = window.location.origin

  useEffect(() => {

    getUserDetails().then(response => {

      setUser(response.data)

    })

  }, [setUser])

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
    navigate('/')
  }

  const withdraw = () => {
    if(Number(user?.unpaidEarnings) < 100) {
      alert("You haven't reached the minimum withdrawal amount of $100.")
    } else {
      alert('Withdrawal request has been sent successfully.')
    }
  }

  return (
    <div>
        <DashboardHeader logout={logout} fullName={user?.fullName} email={user?.email} />
        
        <div id={styles.userSummary}>
          <div>Unpaid Referrals: <br/> <span>{user?.unpaidReferrals}</span></div>
          <div>Total Referrals: <br/> <span>{user?.totalReferrals}</span></div>
          <div>Unpaid Earnings: <br/> <span>${user?.unpaidEarnings}</span></div>
          <div>Total Earnings: <br/> <span>${user?.totalEarnings}</span></div>

          <div><button onClick={withdraw}>Withdraw</button></div>
        </div>

        <div id={styles.referralLinks}>
          <span id={styles.heading}>Referral Links:</span> <br/>

          <span className={styles.label}>To homepage:</span>
          <input type='text' value={`${siteUrl}?ref=${user?.refID}`} readOnly /> <br/>

          <span className={styles.label}>To signup page:</span>
          <input type='text' value={`${siteUrl}/signup?ref=${user?.refID}`} readOnly /> <br/>
          
          <span className={styles.label}>Referral ID:</span>
          <input type='text' value={`${user?.refID}`} readOnly />
          <small>Users can input your referral ID manually on signup page.</small>
        </div>

    </div>
  )
}

export default Dashboard