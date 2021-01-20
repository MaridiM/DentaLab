import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import { Input, Button, Step, Select } from 'components'
import { routes } from 'routes'
import { useForm } from 'hooks'

const { register: { dentist: { step_1, step_2 }}} = routes

const RegisterDentistForm = ({step, maxStep, onChange, onSubmit}) => {
    const { handleChange, handleSubmit, form } = useForm({
        role: 2, //Dentist role
        changeExperience: '',
        city: '',
        clinicAddress: '',
        clinicName: '',
        confirm: '',
        country: '',
        email: '',
        fullname: '',
        password: '',
        phone: '',
        state: '',
    })
    console.log(form)
    const { t } = useTranslation('auth')
    const { title, buttons, steps, experience } = t('dentist', { returnObjects: true })
    const { inputs } = t('base', { returnObjects: true })

    return (
        <form className='register-form'  method="POST">
            <h2 className='auth-modal-title'>{ title }</h2>

            <Step step={step} maxStep={maxStep} stepText={steps} />    
            { step === 1 && 
                <div className='input-group'>
                    <Input type='text' id='fullname' placeholder={ inputs.fullname } onChange={onChange}  />
                    <Input type='email' id='email' placeholder={ inputs.email } onChange={onChange}  />
                    <Input type='phone' id='phone' placeholder={ inputs.phone } onChange={onChange}  />
                    <Input type='password' id='password' autoComplete='off' placeholder={ inputs.password } onChange={onChange}  />
                    <Input type='password' id='confirm' autoComplete='off' placeholder={ inputs.confirm } onChange={onChange}  />
                </div>
            }
            { step === 2 && 
                <div className='input-group'>
                    <Input type='text' id='clinicName' placeholder={ inputs.clinicName } onChange={onChange}  />
                    <Select 
                        label={experience.label}
                        id='changeExperience' 
                        defaultValue={experience.years[0][1]}
                        list={experience.years}
                        onChange={onChange} 
                        noStyle
                        />
                    <Input type='text' id='country' placeholder={ inputs.country } onChange={onChange}  />
                    <Input type='text' id='state' placeholder={ inputs.state} onChange={onChange}  />
                    <Input type='text' id='city' placeholder={ inputs.city } onChange={onChange}  />
                    <Input type='text' id='clinicAddress' placeholder={ inputs.clinicAddress } onChange={onChange}  />
                </div>
            }
                

                { step === 1 && 
                    <Button
                        to={step_2}
                        className='link-next'
                        >{ buttons.next }</Button>
                }
                { step === 2 && 
                    <div className="btn-group">
                        <Button to={step_1} className='btn-group__login'>{ buttons.cancel }</Button>
                        <Button
                            type='submit'
                            onClick={onSubmit}
                            >{ buttons.submit }</Button>
                    </div>
                }

                
                
        </form> 
    )
}

RegisterDentistForm.propTypes = {
    step: PropTypes.number,
    maxStep: PropTypes.number,
    title: PropTypes.string,
}
RegisterDentistForm.defaultProps = {
    step: 1,
    maxStep: 2,
    title: '',
}

export default RegisterDentistForm
