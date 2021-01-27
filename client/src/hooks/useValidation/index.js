import { useState } from 'react'

export const useValidation = () => {
    const [ validate, setValidate ] = useState({})
    const REGEX_MAIL = /^[\w-'.]+@([\w-]+\.)+[\w-]{2,4}$/
    const REGEX_PHONE = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/


    const validationInput = (e, form) => {
        const inputName = e.target.name
        const inputValue = e.target.value
        

        const statusInput = (status=false, message = '') => {
            setValidate(state =>  ({
                ...state, 
                [inputName]: {    
                    status: status,
                    message: message
                }
            }))
        }
        const validateInput = (condition, invalidMessage) => 
            condition ? statusInput(true) : statusInput(false, invalidMessage)

        if(inputValue === '') {
            // Empty field
            statusInput(false, 'Field can not be empty')
        } else {
            // Not Empty
            statusInput(true)
            
            // Validate Email
            inputName === 'email' && 
                validateInput(REGEX_MAIL.test(String(inputValue)),'Invalid email')
            // Validate Phone
            inputName === 'phone' && 
             validateInput(REGEX_PHONE.test(String(inputValue)),'Invalid phone')
            // Validate Password
            inputName === 'password' && 
                validateInput((inputValue.length > 6 && inputValue.length < 32), 'Password must be have at 6 - 32 characters' )
            // Validate Confirm password to Equal
            inputName === 'confirm' && 
                validateInput((form && form.password === inputValue ),'Passwords is  not equal')                
        }
    }
    const validationForm = form => {
        console.log(form)
    }
    return { validationInput, validationForm,  validate  }
}