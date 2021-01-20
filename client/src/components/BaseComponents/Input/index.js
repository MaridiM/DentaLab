import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { WarningSVG, SuccessSVG } from 'icons'

const Input = ({id, className, label, error, autoComplete, noStyle, ...attrs}) => {  

    const classes = classnames(
        !noStyle && 'input-field',
        className, 
        error.status === 'success' && 'input-field-success',
        error.status === 'error' && 'input-field-error',
    )
    return (
        <div className='input'>
            { label && <label className='input-label' htmlFor={id}>{ label }</label> } 
            <div className='input-wrapper'>
                <input 
                    className={classes}
                    autoComplete={autoComplete}
                    name={id}
                    id={id}
                    {...attrs}
                    />
                { 
                    error.status 
                        ?   error.status  ===  'error' 
                                ? <span className='input-icon'>
                                    <WarningSVG className="input-icon-error" />
                                </span> 
                                : <span className='input-icon'>
                                    <SuccessSVG className="input-icon-success" />
                                </span> 
                        : null
                    }
            </div>
        </div>
    )
}

Input.propTypes = {
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
    autoComplete: PropTypes.string,
    label: PropTypes.string,
    error: PropTypes.object,
    noStyle: PropTypes.bool,
}
Input.defaultProps = {
    className: '',
    label: '',
    error: {
        status: '',
        msg: 'Default status message'
    },
    autoComplete: 'on',
    noStyle: false
}

export default Input
