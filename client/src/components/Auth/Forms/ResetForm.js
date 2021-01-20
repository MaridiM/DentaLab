import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import { Button, Input } from 'components'
import { routes } from 'routes'

const { login } = routes

const ResetForm = ({onChange, onSubmit}) => {
    const { t } = useTranslation('auth')
    const { title, buttons } = t('reset', { returnObjects: true })
    const { inputs } = t('base', { returnObjects: true })

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
    title: PropTypes.string
}
ResetForm.defaultProps = {
    title: ''
}

export default ResetForm
