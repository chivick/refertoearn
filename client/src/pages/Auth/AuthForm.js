import { useContext } from "react"
import { useNavigate } from 'react-router-dom'
import useInput from "../../hooks/useInput"
import { AuthContext } from "../../context/authContext"
import { addNewUser, login } from '../../api'

import styles from './AuthForm.module.css'

const AuthForm = ({ type }) => {

    const [fullNameInputJsx, fullName, setFullName] = useInput({type: 'text', placeholder: 'e.g. Victor ChiVick'})
    const [emailInputJsx, email, setEmail] = useInput({type: 'text', placeholder: 'abc@xyz.com'})
    const [passwordInputJsx, password, setPassword] = useInput({type: 'password', placeholder: '******'})
    const [confirmPasswordInputJsx, confirmPassword, setConfirmPassword] = useInput({type: 'password', placeholder: '******'})
    const [referrerInputJsx, referrer, setReferrer] = useInput({type: 'text', disabled: true, placeholder: 'Referrer ID'}, 'CHIVICK')

    const { setUser } = useContext(AuthContext)
    const navigate = useNavigate()

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

      // if(type === 'signup') {
      //   const { data } = await addNewUser(userDetails)
      // } 

      // if(type === 'login') {
      //   const { data } = await login({ email, password })
      // }

      try {

        const { data } = type === 'signup' ? await addNewUser(userDetails) : await login({ email, password })

        if(data) {

          setUser(data)

          navigate('/dashboard')
        }
        
      } catch (error) {
        alert(error.message)
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