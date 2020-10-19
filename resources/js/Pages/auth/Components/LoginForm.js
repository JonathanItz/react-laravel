import React, { useState } from 'react'
import axios from 'axios'
import { InertiaLink } from '@inertiajs/inertia-react'

const LoginForm = ( { action } ) => {
    const [ emailError, setEmailError ]       = useState( false )
    const [ passwordError, setPasswordError ] = useState( false )

    const loginUser = ( e ) => {
        e.preventDefault()

        const email = e.target.email.value,
              password = e.target.password.value,
              rememberPass = document.querySelector( '[name="remember"]:checked' ) ?true:false;

        if( ! email || ! password ) {
            if( ! email ) {
                setEmailError( true )
            }

            if( ! password ) {
                setPasswordError( true )
            }

            return
        }

        setEmailError( false )
        setPasswordError( false )

        const data = {
            email,
            password,
            remember: rememberPass
        }

        axios.post( action, data )
            .then( function( response ) {
                console.log(response);
                document.location = '/dashboard'
            })
            .catch( function( error ) {
                console.log(error);
            })
    }

    return (
        <>
            <form action={ action } onSubmit={ loginUser }>

                <div>
                    <label>
                        E-Mail Address
                        <input id="email" type="email" name="email" required autoComplete="email" autoFocus />
                    </label>
                    { emailError && <div>Email error</div> }
                </div>

                <div>
                    <label>
                        Password
                        <input id="password" type="password" name="password" required autoComplete="current-password" />
                    </label>
                    { passwordError && <div>Password error</div> }
                </div>

                <div>
                    <input type="checkbox" name="remember" id="remember" />
                </div>

                <button type="submit">Login</button>

            </form>
        </>
    )
}

export default LoginForm
