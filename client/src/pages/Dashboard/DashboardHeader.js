import styles from './DashboardHeader.module.css'

const DashboardHeader = ({ logout, fullName, email }) => {
  return (
    <>
    <header id={styles.header}>

        <div id={styles.logo}>
          Refer2Earn
        </div>

        <div>
          <span>{fullName} ({email})</span> <button onClick={logout}>Logout</button>
        </div>
        
    </header>
    <div id={styles.loginInfo}>
      {fullName} ({email}) 
    </div>
    </>
  )
}

export default DashboardHeader