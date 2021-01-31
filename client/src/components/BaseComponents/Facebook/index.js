import React, { useState } from 'react'

import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { Button } from 'components'
import { FacebookSVG } from 'icons'

const Facebook = ({ children }) => {
    const [facebookLogin, setFacebookLogin] = useState({
        isAuth: false,
        userID: '',
        name: '',
        email: '',
        phone: ''
    })
    const componentClicked = () => console.log('clicked')
    const responseFacebook = response => {
        console.log(response)
    }
 
    return (
        <FacebookLogin
            appId="462259068265305"
            autoLoad={false}
            fields="name,email,picture"
            callback={responseFacebook} 
            render={renderProps => (
                <Button className='btn-facebook' onClick={renderProps.onClick}>
                    <FacebookSVG className='btn__img' />
                    { children }
                </Button>
            )} />
    )
}

export default Facebook
