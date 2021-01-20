import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import { Button, Input, Textarea } from 'components'
import { routes } from 'routes'

const { login } = routes

const HelpForm = ({onChange, onSubmit}) => {
    const { t } = useTranslation('auth')
    const { title, buttons } = t('help', { returnObjects: true })
    const { inputs } = t('base', { returnObjects: true })


    return (
        <form className='help-form'  method="POST">
            <h2 className='auth-modal-title'>{ title }</h2>

            <div className='input-group'>
                <Input type='email' id='email' placeholder={ inputs.email } onChange={onChange} />
                <Textarea id='question' placeholder={ inputs.help } onChange={onChange} />
            </div>                        

            <div className='btn-group'>
                <Button to={login} className='link-btn'>{ buttons.cancel }</Button>
                <Button type='submit' onClick={onSubmit} >{ buttons.submit }</Button> 
            </div>

        </form> 
    )
}

HelpForm.propTypes = {
    title: PropTypes.string
}
HelpForm.defaultProps = {
    title: ''
}

export default HelpForm
