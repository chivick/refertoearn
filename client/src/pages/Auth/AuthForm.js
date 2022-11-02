import { useContext } from 'react'
import { useLocation, useNavigate} from 'react-router-dom'
import useInput from "../../hooks/useInput"
import { addNewUser, login, verifyRef } from '../../api'
import { AuthContext } from '../../context/authContext'

import styles from './AuthForm.module.css'

const AuthForm = ({ type, refID }) => {

    const [fullNameInputJsx, fullName] = useInput({type: 'text', placeholder: ''})
    const [emailInputJsx, email] = useInput({type: 'text', placeholder: ''})
    const [passwordInputJsx, password] = useInput({type: 'password', placeholder: ''})
    const [confirmPasswordInputJsx, confirmPassword] = useInput({type: 'password', placeholder: ''})
    const [referrerInputJsx, referrer] = useInput({type: 'text', placeholder: ''}, refID || '')

    const navigate = useNavigate()
    const location = useLocation()

    const { setUser } = useContext(AuthContext)
    

    const signUpInputs = [
      {label: 'Full Name', jsx: fullNameInputJsx}, 
      {label: 'Email', jsx: emailInputJsx}, 
      {label: 'Password', jsx: passwordInputJsx}, 
      {label: 'Confirm Password', jsx: confirmPasswordInputJsx},
      {label: 'Referrer ID', jsx: referrerInputJsx}
    ]

    const loginInputs = [
      {label: 'Email', jsx: emailInputJsx}, 
      {label: 'Password', jsx: passwordInputJsx}
    ]

    const submitHandler = async(e) => { 
      e.preventDefault()
      
      const userDetails = { 
        fullName, email, password, referrer 
      }

      let data
      let _verifyRef

      // Form validation for registration
      if(type === 'signup') {
        if(fullName.length < 6) return alert('Name must be at least 6 characters long!')
        if(!email.includes('@') || !email.includes('.') || email.length < 6) return alert('Email is not valid!')
        if(password.length < 6)  return alert('Password must be at least 6 characters long!')
        if(password !== confirmPassword) return alert('Passwords do not match!')
      }

      try {

        if(type === 'signup' && referrer) {

          try {
            _verifyRef = await verifyRef({ referrer })
          } catch (error) {
            if (error.response.status === 400) {
              let proceed = window.confirm("The referrer ID you inputed is not valid. IDs are case-sensitive, so check for typos. Do you still wish to proceed with registration?")
              if(proceed) {
                data = await addNewUser({...userDetails, referrer: ''})
              } else {
                return
              }
              
            } 
          }  

          if (_verifyRef?.data) {
            data = await addNewUser(userDetails)
          }
        }

        if(type === 'signup' && !referrer) {
          data = await addNewUser(userDetails)
        }


        if(type === 'login') {
          data = await login({ email, password })
        }

        if(data) {

          localStorage.removeItem('referrer')

          localStorage.setItem('user',JSON.stringify(data.data))

          setUser(data.data)

          // Redirecting the user after authentication
          navigate(location.state?.from?.pathname || '/dashboard')
        }
        
      } catch (error) {
        // if(error.response.status === 400)
        if(error.response) {
          alert(error.response.data)
        } else {
          console.log(error.message)
        }
        
      }


    }

  return (
    <div id={styles.main}>

        <div id={styles.heading}>{type === 'signup' ? 'Register' : 'Login'}</div>

        <form id={styles.formDiv} onSubmit={submitHandler}>

            {type === 'signup' && signUpInputs.map((input, index) => (
            <div className={styles.inputDiv} key={index}>
                <label>{input.label}:</label>
                {input.jsx}
            </div>
            ))}

            {type === 'login' && loginInputs.map((input, index) => (
            <div className={styles.inputDiv} key={index}>
                <label>{input.label}:</label>
                {input.jsx}
            </div>
            ))}


            <button>{type === 'signup' ? 'Register' : 'Login'}</button>

        </form>

    </div>
  )
}

export default AuthForm