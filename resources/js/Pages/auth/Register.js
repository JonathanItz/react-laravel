import React, { useState } from 'react'
import { InertiaLink } from '@inertiajs/inertia-react'
import axios from 'axios'

const Register = ( { action, token } ) => {
    const [ nameError, setNameError ]                   = useState( false )
    const [ emailError, setEmailError ]                 = useState( false )
    const [ passwordError, setPasswordError ]           = useState( false )
    const [ passwordCheckError, setPasswordCheckError ] = useState( false )
    const [ passwordMatchError, setPasswordMatch ]      = useState( false )

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

        var instance = axios.create({
            headers: { 'X-CSRF-TOKEN': token },
        });

        instance.post( action, {
            name,
            email,
            password,
            password_confirmation: passwordCheck
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

        console.log(email);
        console.log(name);
        console.log(password);
        console.log(passwordCheck);
    }

    return (
        <>
            <h1>Register Page</h1>

            <form method="POST" onSubmit={ registerUser }>
                <input type="hidden" name="_token" value={ token } />

                <div>
                    <label>
                        Name
                        <input id="name" type="text" name="name" autoComplete="name" autoFocus />
                    </label>
                    { nameError && <div>error</div> }
                </div>

                <div>
                    <label>
                        E-Mail Address
                        <input id="email" type="email" name="email" autoComplete="email" />
                    </label>
                    { emailError && <div>error</div> }
                </div>

                <div>
                    <label htmlFor="password">
                        Password
                        <input id="password" type="password" name="password" autoComplete="new-password" />
                    </label>
                    { passwordError && <div>error</div> }
                </div>

                <div>
                    <label htmlFor="password-confirm">
                        Confirm Password
                        <input id="password-confirm" type="password" name="password_confirmation" autoComplete="new-password" />
                    </label>
                    { passwordCheckError && <div>error</div> }
                    { passwordMatchError && <div>Password doesn't match</div> }
                </div>

                <button type="submit">Register</button>
            </form>

            <InertiaLink href="/">Home</InertiaLink>
        </>
    )
}

export { Register as default }
