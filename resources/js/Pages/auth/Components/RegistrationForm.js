import React from 'react'
import { InertiaLink } from '@inertiajs/inertia-react'

const RegistrationForm = ( props ) => {
    const {
        registerUser,
        emailError,
        nameError,
        passwordCheckError,
        passwordError,
        passwordMatchError,
        generalError
    } = props

    return (
        <>

            { generalError && <div>general error message</div> }
            <h1>Register Page</h1>

            <form method="POST" onSubmit={ registerUser }>

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

export default RegistrationForm
