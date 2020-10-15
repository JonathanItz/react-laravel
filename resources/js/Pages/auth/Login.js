import React from 'react'
import { InertiaLink } from '@inertiajs/inertia-react'

const Login = () => {
    return (
        <>
            <h1>Login Page</h1>
            <InertiaLink href="/register">Register</InertiaLink>
            <br />
            <InertiaLink href="/">Home</InertiaLink>
        </>
    )
}

export { Login as default }
