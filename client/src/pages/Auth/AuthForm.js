import { useContext } from "react"
import { useLocation, useNavigate} from 'react-router-dom'
import useInput from "../../hooks/useInput"
import { AuthContext } from "../../context/authContext"
import { addNewUser, login, verifyRef } from '../../api'

import styles from './AuthForm.module.css'

const AuthForm = ({ type, refID }) => {

    const [fullNameInputJsx, fullName, setFullName] = useInput({type: 'text', placeholder: 'e.g. Victor ChiVick'})
    const [emailInputJsx, email, setEmail] = useInput({type: 'text', placeholder: 'abc@xyz.com'})
    const [passwordInputJsx, password, setPassword] = useInput({type: 'password', placeholder: '******'})
    const [confirmPasswordInputJsx, confirmPassword, setConfirmPassword] = useInput({type: 'password', placeholder: '******'})
    const [referrerInputJsx, referrer, setReferrer] = useInput({type: 'text', placeholder: 'Referrer ID'}, refID || '')

    const { setUser } = useContext(AuthContext)

    const navigate = useNavigate()
    const location = useLocation()
    

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

          setUser(data.data)

          localStorage.setItem('user',JSON.stringify(data.data))

          // Redirecting the user after authentication
          navigate(location.state?.from?.pathname || '/dashboard')
        }
        
      } catch (error) {
        // if(error.response.status === 400) 
        alert(error.response.data)
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