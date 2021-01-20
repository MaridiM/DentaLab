import React from 'react'
import PropTypes from 'prop-types'

import { AuthImgModule } from 'modules'
import { AuthRoutes } from 'routes'

const Auth = ({changeLanguage}) => {
    return (
        <div className='wrapper auth'>
            <div className='auth-modal'>
                <AuthRoutes changeLanguage={changeLanguage} />
                <AuthImgModule />
            </div>
        </div>
    )
}
AuthRoutes.propTypes = {
    changeAccount: PropTypes.func
}
AuthRoutes.defaultProps = {
    changeAccount: () => {},
}

export default Auth
