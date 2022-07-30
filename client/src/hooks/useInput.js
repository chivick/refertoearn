import { useState } from 'react'

const useInput = (config, defaultValue = '') => {
    const [inputValue, setInputValue] = useState(defaultValue)

  return [
        <input {...config} value={inputValue} onChange={e => setInputValue(e.target.value)} />, 
        inputValue, 
        setInputValue
    ]
    
}

export default useInput