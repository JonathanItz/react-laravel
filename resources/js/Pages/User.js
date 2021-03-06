import React from 'react'
import { InertiaLink } from '@inertiajs/inertia-react'

const Users = ( { user } ) => {
    return (
        <>
            <h1>User:</h1>
            <h2>{ user.name }</h2>
            <p>Id: { user.user_id }</p>
            <InertiaLink href="/">Users</InertiaLink>
        </>
    )
}

export { Users as default }
