import React, { useState } from 'react'
import axios from 'axios'

import LoginForm from './LoginForm'
import RegistrationForm from './RegistrationForm'

const AuthHandler = ( { action, token, form } ) => {

    const [ nameError, setNameError ]                   = useState( false )
    const [ emailError, setEmailError ]                 = useState( false )
    const [ passwordError, setPasswordError ]           = useState( false )
    const [ passwordCheckError, setPasswordCheckError ] = useState( false )
    const [ passwordMatchError, setPasswordMatch ]      = useState( false )
    const [ generalError, setGeneralError ]             = useState( false )

    // Show Login or registration form. true for Login, false for Registration
    const [ loginOrRegistration, setLoginOrRegistration ] = useState( form )

    const registerUser = ( e ) => {
        e.preventDefault()

        const name          = e.target.name.value,
              email         = e.target.email.value,
              password      = e.target.password.value,
              passwordCheck = e.target.password_confirmation.value

        // Show error if any of these are empty
        if( ! name || ! email || ! password || ! passwordCheck ) {
            setNameError( ! name )
            setEmailError( ! email )
            setPasswordError( ! password )
            setPasswordCheckError( ! passwordCheck )
            setPasswordMatch( password !== passwordCheck )
            return
        }

        setNameError( false )
        setEmailError( false )
        setPasswordError( false )
        setPasswordCheckError( false )
        setPasswordMatch( false )

        axios.post( action, {
            name,
            email,
            password,
            password_confirmation: passwordCheck
        })
        .then( function ( response ) {
            console.log(response);
            window.history.pushState( { html: 'Login page' }, 'Login', '/login');
            setLoginOrRegistration( true )
        })
        .catch( function ( error ) {
            console.log(error);
            setGeneralError( true )
        })
    }

    const states = { nameError, emailError, passwordError, passwordCheckError, passwordMatchError, generalError }

    // Return either the registration or Login
    return loginOrRegistration ? <LoginForm action={ action } /> : <RegistrationForm registerUser={ registerUser } { ...states } />
}

export { AuthHandler as default }
