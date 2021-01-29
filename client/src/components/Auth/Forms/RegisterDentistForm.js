import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Input, Button, Step, Select } from 'components'
import { routes } from 'routes'
import { useForm } from 'hooks'

const { register: { dentist: { step_1, step_2 }}} = routes

const RegisterDentistForm = ({step, maxStep, useTranslate}) => {
    const [ disabled, setDisabled ] = useState(null)
    const { translation: {
        dentist: { title, buttons, steps, experience },
        base: { inputs }
    }} = useTranslate('auth', [['dentist', true], ['base', true]])

    const { onChange, onSubmit, onBlur, form, validate } = useForm({
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

    useEffect( () => {
    //    Код  сдесь!

    }, [setDisabled, validate, form])



    return (
        <form className='register-form'  method="POST">
            <h2 className='auth-modal-title'>{ title }</h2>

            <Step step={step} maxStep={maxStep} stepText={steps} />    
            { step === 1 && 
                <div className='input-group'>
                    <Input 
                        type='text' 
                        id='fullname' 
                        placeholder={inputs.fullname } 
                        onChange={onChange} 
                        onBlur={onBlur} 
                        validate={validate}
                        value={form.fullname} />
                    <Input 
                        type='email' 
                        id='email' 
                        placeholder={ inputs.email } 
                        onChange={onChange} 
                        onBlur={onBlur} 
                        validate={validate}
                        value={form.email} />
                    <Input 
                        type='tel' 
                        id='phone' 
                        placeholder={ inputs.phone } 
                        pattern="+[0-9]{1,2}-[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
                        onChange={onChange} 
                        onBlur={onBlur} 
                        validate={validate}
                        value={form.phone} />
                    <Input 
                        type='password' 
                        id='password' 
                        autoComplete='off' 
                        placeholder={ inputs.password } 
                        onChange={onChange} 
                        onBlur={onBlur} 
                        validate={validate}
                        value={form.password} />
                    <Input 
                        type='password' 
                        id='confirm' 
                        autoComplete='off' 
                        placeholder={ inputs.confirm } 
                        onChange={onChange} 
                        onBlur={onBlur} 
                        validate={validate}
                        value={form.confirm} />
                </div>
            }
            { step === 2 && 
                <div className='input-group'>
                    <Input 
                        type='text' 
                        id='clinicName' 
                        placeholder={ inputs.clinicName } 
                        onChange={onChange} 
                        onBlur={onBlur} 
                        validate={validate}
                        value={form.clinicName} />
                    <Select 
                        label={experience.label}
                        id='changeExperience' 
                        defaultValue={form.changeExperience}
                        list={experience.years}
                        onChange={onChange} 
                        noStyle
                        />
                    <Input 
                        type='text' 
                        id='country' 
                        placeholder={ inputs.country } 
                        onChange={onChange} 
                        onBlur={onBlur} 
                        validate={validate}
                        value={form.country} />
                    <Input 
                        type='text' 
                        id='state' 
                        placeholder={ inputs.state} 
                        onChange={onChange} 
                        onBlur={onBlur} 
                        validate={validate}
                        value={form.state} />
                    <Input 
                        type='text' 
                        id='city' 
                        placeholder={ inputs.city } 
                        onChange={onChange} 
                        onBlur={onBlur} 
                        validate={validate}
                        value={form.city} />
                    <Input 
                        type='text' 
                        id='clinicAddress' 
                        placeholder={ inputs.clinicAddress } 
                        onChange={onChange} 
                        onBlur={onBlur} 
                        validate={validate}
                        value={form.clinicAddress} />
                </div>
            }
                

               { step === 1 && 
                    <Button
                        to='/vlad_2'
                        className='link-next'
                        disabled={disabled}
                        >{ buttons.next }</Button>
                }
                { step === 2 && 
                    <div className="btn-group">
                        <Button 
                            to='/vlad_1' 
