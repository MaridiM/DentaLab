import { useState } from 'react'

import { useValidation } from 'hooks'

export const useForm = ( initialState = {} ) => {
    const [ form, setForm ] = useState(initialState)
    const { validate } = useValidation()
    
    const onChange = (e) => {
        validate({[e.target.name]: e.target.value})
        
        setForm(form => ({
            ...form,
            [e.target.name]: e.target.value
        }))
    }
    
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(form)
    }


    return { onChange, onSubmit, form }
}
