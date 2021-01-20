import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'

import { AuthFormModule } from 'modules'
import routes from './routes'
import {
    LoginForm,
    TypeAccount,
    RegisterPatientForm,
    RegisterDentistForm,
    ForgotForm,
    ResetForm,
    HelpForm,
} from 'components'
const {
    main,
    login,
    register: { changeAccount, patient, dentist }, 
    password: { forgot, reset},
    help
} = routes

const AuthRoutes = ({changeLanguage, location}) => {
    const { pathname } = location
    const { t } = useTranslation('auth')
    const { authBtn } = t('base', { returnObjects: true })
    return (
         <Switch>
            <Route exact path={[main, login]}>
                <AuthFormModule 
                    component={LoginForm} 
                    changeLanguage={changeLanguage} 
                    footer/>
            </Route>

            <Route exact path={changeAccount}>
                <AuthFormModule 
                    component={TypeAccount} 
                    changeLanguage={changeLanguage}
                    type='change-account'
                    btnText={authBtn}
                    footer/>
            </Route>

            <Route exact path={patient}>
                <AuthFormModule 
                    component={RegisterPatientForm} 
                    changeLanguage={changeLanguage}
                    type='register-patient'
                    btnText={authBtn}
                    footer/>
            </Route>

            <Route exact path={[dentist.step_1, dentist.step_2]}>
                <AuthFormModule 
                    component={RegisterDentistForm} 
                    changeLanguage={changeLanguage}
                    type='register'
                    btnText={authBtn}
                    maxStep={2}
                    footer={Number(pathname.split('-')[1]) === 1 ? true : false} />
            </Route>

            <Route exact path={[forgot, reset]}>
                <AuthFormModule 
                    component={pathname === forgot ? ForgotForm : ResetForm}
                    changeLanguage={changeLanguage} 
                    title={pathname === forgot ? 'Forgot password' : 'Reset password'} 
                    footer />
            </Route>

            <Route exact path={help}>
                <AuthFormModule 
                    component={HelpForm} 
                    changeLanguage={changeLanguage} />
            </Route>
        </Switch>
    )
}

AuthRoutes.propTypes = {
    changeAccount: PropTypes.func
}
AuthRoutes.defaultProps = {
    changeAccount: () => {},
}
export default withRouter(AuthRoutes)