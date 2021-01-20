import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import { Input, Button} from 'components'

const RegisterPatientForm = ({onChange, onSubmit}) => {
    const { t } = useTranslation('auth')
    const { title, buttons } = t('patient', { returnObjects: true })
    const { inputs } = t('base', { returnObjects: true })

    return (
        <form className='register-form' method="POST">
            <h2 className='auth-modal-title'>{ title }</h2>

            <div className='input-group'>
                <Input type='text' id='fullname' placeholder={ inputs.fullname } onChange={onChange}/>
                <Input type='email' id='email' placeholder={ inputs.email } onChange={onChange} />
                <Input type='phone' id='phone' placeholder={ inputs.phone } onChange={onChange} />
                <Input type='password' id='password' autoComplete='off' placeholder={ inputs.password } onChange={onChange} />
                <Input type='password' id='confirm' autoComplete='off' placeholder={ inputs.confirm } onChange={onChange} />
            </div>

            <Button type='submit' className='btn-login' onClick={onSubmit}>{ buttons.submit }</Button>
        </form> 
    )
}
RegisterPatientForm.propTypes = {
    title: PropTypes.string
}
RegisterPatientForm.defaultProps = {
    title: ''
}
export default RegisterPatientForm
