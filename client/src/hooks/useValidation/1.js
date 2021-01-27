import { useState } from 'react'

export const useValidation = () => {
    const [ validate, setValidate ] = useState({})
    const REGEX_MAIL = /^[\w-'.]+@([\w-]+\.)+[\w-]{2,4}$/
    const REGEX_PHONE = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/

    const validationInput = (e, form) => {
        const inputName = e.target.name
        const inputValue = e.target.value

        const validateStatus = (status=false, message = '') => {
            setValidate(state =>  ({
                ...state, 
                [inputName]: {    
                    status: status,
                    message: message
                }
            }))
        }


        // If Empty field
        if(inputValue === '') {
            validateStatus(false, 'Field can not be empty')
        } else {
            validateStatus(true)
            if(inputName === 'email') {
                // Valid mail
                if(REGEX_MAIL.test(String(inputValue))) {
                    validateStatus(true)
                } else {
                    validateStatus(false, 'Invalid email')
                }
            }
            if(inputName === 'phone') {
                // Valid phone
                if(REGEX_PHONE.test(String(inputValue))) {
                    validateStatus(true)
                } else {
                    validateStatus(false, 'Invalid phone')
                }
            }

            // Valid Passwords
            if (inputName === 'password') {
                // Passwords length
                if(inputValue.length > 6 && inputValue.length < 32 ) {
                    validateStatus(true)
                } else {
                    validateStatus(false, 'Password must be have at 6 - 32 characters')
                }
            }
            // Valid to  equal Password
            if (inputName === 'confirm') {
                if(form && form.password === inputValue ) {
                    validateStatus(true)
               } else {
                   validateStatus(false, 'Passwords is not equal')
               }
                
            }
        }
    }
    const validationForm = form => {
        console.log(form)
    }
    return { validationInput, validationForm,  validate  }
}