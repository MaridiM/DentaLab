import React from 'react'
import PropTypes from 'prop-types'

import { Button, Input } from 'components'
import { routes } from 'routes'

const { login } = routes

const ForgotForm = ({ onChange, onSubmit, useTranslate }) => {
    const { translation: {
        forgot: { title, info, buttons: { back, submit} },
        base: { inputs }
    }} = useTranslate('auth', [['forgot', true], ['base', true]])

    
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

ForgotForm.propTypes = {
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    useTranslate: PropTypes.func,

}
ForgotForm.defaultProps = {
    onChange: () => {},
    onSubmit: () => {},
    useTranslate: () => {},
}

export default ForgotForm
