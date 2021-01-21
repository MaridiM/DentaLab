import React from 'react'
import PropTypes from 'prop-types'

import { Button, Input, Textarea } from 'components'
import { routes } from 'routes'

const { login } = routes

const HelpForm = ({onChange, onSubmit, useTranslate}) => {
    const { translation: {
        help: { title, buttons },
        base: { inputs }
    }} = useTranslate('auth', [['help', true], ['base', true]])


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
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    useTranslate: PropTypes.func,

}
HelpForm.defaultProps = {
    onChange: () => {},
    onSubmit: () => {},
    useTranslate: () => {},
}

export default HelpForm
