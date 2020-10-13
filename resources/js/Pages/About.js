import React from 'react'
import { InertiaLink } from '@inertiajs/inertia-react'

const Users = () => {
    return (
        <>
            <h1>About</h1>
            <p>This app is built with React, Laravel and Inertia</p>
            <InertiaLink href="/">Home</InertiaLink>
        </>
    )
}

export { Users as default }
