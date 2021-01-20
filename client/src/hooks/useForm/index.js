import { useState } from 'react'

export const useForm = ( initialState = {} ) => {
    const [ form, setForm ] = useState(initialState)
    
    const onChange = (e) => {
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
