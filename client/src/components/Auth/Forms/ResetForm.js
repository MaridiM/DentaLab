import React from 'react'
import PropTypes from 'prop-types'

import { Button, Input } from 'components'
import { routes } from 'routes'

const { login } = routes

const ResetForm = ({onChange, onSubmit, useTranslate}) => {
    const { translation: {
        reset: { title, buttons },
        base: { inputs }
    }} = useTranslate('auth', [['reset', true], ['base', true]])



    return (
        <form className='password-form'  method="POST">
            <h2 className='auth-modal-title'>{ title }</h2>

            <div className='input-group'>
                <Input type='password' id='password' autoComplete='off' placeholder={ inputs.password } onChange={onChange} />
                <Input type='password' id='confirm' autoComplete='off' placeholder={ inputs.confirm } onChange={onChange} />
            </div>                        

            <div className='btn-group'>
                <Button to={login} className='link-btn'>{ buttons.cancel }</Button>
                <Button type='submit' onClick={onSubmit} >{ buttons.submit }</Button> 
            </div>

        </form> 
    )
}

ResetForm.propTypes = {
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    useTranslate: PropTypes.func,

}
ResetForm.defaultProps = {
    onChange: () => {},
    onSubmit: () => {},
    useTranslate: () => {},
}

export default ResetForm
