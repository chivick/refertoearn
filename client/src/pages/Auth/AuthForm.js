import useInput from "../../hooks/useInput"

import styles from './AuthForm.module.css'

const AuthForm = ({ type }) => {
    const [fullNameInputJsx, fullName, setFullName] = useInput({type: 'text', placeholder: 'e.g. Victor ChiVick'})
    const [emailInputJsx, email, setEmail] = useInput({type: 'text', placeholder: 'abc@xyz.com'})
    const [passwordInputJsx, password, setPassword] = useInput({type: 'password', placeholder: '******'})
    const [confirmPasswordInputJsx, confirmPassword, setConfirmPassword] = useInput({type: 'password', placeholder: '******'})
    const [referrerInputJsx, referrer, setReferrer] = useInput({type: 'text', disabled: true, placeholder: 'Referrer ID'}, 'CHIVICK')

    const allInputs = [
      {label: 'Full Name', jsx: fullNameInputJsx}, 
      {label: 'Email', jsx: emailInputJsx}, 
      {label: 'Password', jsx: passwordInputJsx}, 
      {label: 'Confirm Password', jsx: confirmPasswordInputJsx},
      {label: 'Referrer ID', jsx: referrerInputJsx}
    ]

    const submitHandler = (e) => { 
      e.preventDefault()
    }

  return (
    <div id={styles.main}>

        <div id={styles.heading}>{type === 'signup' ? 'Register' : 'Login'}</div>

        <form id={styles.formDiv} onSubmit={submitHandler}>

            {allInputs.map(input => (
            <div className={styles.inputDiv}>
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