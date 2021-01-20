import React from 'react'
import { useTranslation } from "react-i18next"

import { Button, Input } from 'components'
import { routes } from 'routes'

const { login } = routes

const ForgotForm = ({ onChange, onSubmit }) => {
    const { t } = useTranslation('auth') // Get  translete from  json on utils
    const {
        title, info, buttons: { back, submit}
    } = t("forgot", { returnObjects: true })
    const { inputs } = t('base', { returnObjects: true })
    
    return (
        
        <form className='password-form'  method="POST">
            <h2 className='auth-modal-title'>{ title }</h2>
            <p className='password-info'>{ info }</p>
            
            <Input type='email' id='email' placeholder={ inputs.email } onChange={onChange} />

            <div className='btn-group'>
                <Button to={login} className='link-btn'>{ back }</Button>
                <Button type='submit' onClick={onSubmit}>{ submit }</Button>
            </div>

        </form>
    )
}

export default ForgotForm
