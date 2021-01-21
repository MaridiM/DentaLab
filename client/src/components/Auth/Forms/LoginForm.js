import React from 'react'
import PropTypes from 'prop-types'

import { Input, Button, Select } from 'components'
import { routes } from 'routes'
import { FacebookSVG, GoogleSVG } from 'icons'

const { password: {forgot}, register: {changeAccount} } = routes

const LoginForm = ({onChange, onSubmit, useTranslate}) => {
    const { translation: {
        login: { title, selectList, buttons, links },
        base: { inputs }
    }} = useTranslate('auth', [['login', true], ['base', true]])
    

    return (
        <form className='login-form'  method="POST">
            <h2 className='auth-modal-title'>{ title }</h2>

            <Input 
                type='email' 
                id='email' 
                onChange={onChange}
                placeholder={ inputs.email } />
            <Input 
                type='password' 
                id='password' 
                autoComplete='off' 
                onChange={onChange}
                placeholder={ inputs.password } />

            <div className='input-group'>
                <Select 
                    id='changeTypeAccount' 
                    defaultValue='Dentist' 
                    onChange={onChange}
                    list={ selectList } />

                <Button to={forgot}>{ links.forgot }</Button>
            </div>


            <div className='btn-group'>
                <Button to={changeAccount}>{ links.register }</Button>
                <Button 
                    type='submit'
                    onClick={onSubmit}
                >{ buttons.submit }</Button>
            </div>

            <div className='login-form__social'>
                <Button type='submit' className='btn-facebook'>
                    <FacebookSVG className='btn__img' />
                    { buttons.facebook }
                </Button>
                <Button type='submit' className='btn-google'>
                    <GoogleSVG className='btn__img' />
                    { buttons.google }
                </Button>
            </div> 
        </form> 
    )
}

LoginForm.propTypes = {
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    useTranslate: PropTypes.func,

}
LoginForm.defaultProps = {
    onChange: () => {},
    onSubmit: () => {},
    useTranslate: () => {},
}

export default LoginForm
