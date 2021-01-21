import React from 'react'
import PropTypes from 'prop-types'

import { Input, Button, Step, Select } from 'components'
import { routes } from 'routes'
import { useForm } from 'hooks'

const { register: { dentist: { step_1, step_2 }}} = routes

const RegisterDentistForm = ({step, maxStep, useTranslate}) => {
    const { translation: {
        dentist: { title, buttons, steps, experience },
        base: { inputs }
    }} = useTranslate('auth', [['dentist', true], ['base', true]])
    
    const { onChange, onSubmit, form } = useForm({
        role: 'dentist', //Dentist role
        changeExperience: experience.years[0][1],
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


    

    return (
        <form className='register-form'  method="POST">
            <h2 className='auth-modal-title'>{ title }</h2>

            <Step step={step} maxStep={maxStep} stepText={steps} />    
            { step === 1 && 
                <div className='input-group'>
                    <Input type='text' id='fullname' placeholder={inputs.fullname } onChange={onChange} value={form.fullname} />
                    <Input type='email' id='email' placeholder={ inputs.email } onChange={onChange} value={form.email} />
                    <Input type='phone' id='phone' placeholder={ inputs.phone } onChange={onChange} value={form.phone} />
                    <Input type='password' id='password' autoComplete='off' placeholder={ inputs.password } onChange={onChange} value={form.password} />
                    <Input type='password' id='confirm' autoComplete='off' placeholder={ inputs.confirm } onChange={onChange} value={form.confirm} />
                </div>
            }
            { step === 2 && 
                <div className='input-group'>
                    <Input type='text' id='clinicName' placeholder={ inputs.clinicName } onChange={onChange} value={form.clinicName} />
                    <Select 
                        label={experience.label}
                        id='changeExperience' 
                        defaultValue={form.changeExperience}
                        list={experience.years}
                        onChange={onChange} 
                        noStyle
                        />
                    <Input type='text' id='country' placeholder={ inputs.country } onChange={onChange} value={form.country} />
                    <Input type='text' id='state' placeholder={ inputs.state} onChange={onChange} value={form.state} />
                    <Input type='text' id='city' placeholder={ inputs.city } onChange={onChange} value={form.city} />
                    <Input type='text' id='clinicAddress' placeholder={ inputs.clinicAddress } onChange={onChange} value={form.clinicAddress} />
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
    useTranslate: PropTypes.func,
}
RegisterDentistForm.defaultProps = {
    step: 1,
    maxStep: 2,
    title: '',
    useTranslate: () => {},
}

export default RegisterDentistForm
