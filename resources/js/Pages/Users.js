import React from 'react'
import { InertiaLink } from '@inertiajs/inertia-react'

const Users = ( props ) => {
    return (
        <>
            <h1>Users</h1>
            <p>Here are a list of users:</p>
            <ul>
                {
                    props.users.map( ( user, key ) => (<li key={ key }><InertiaLink href={ `/user/${ user.name }` }>{ user.name }</InertiaLink></li>))
                }
            </ul>
            <InertiaLink href="/about">About</InertiaLink>
            <br />
            <a href="/static">Static</a>
        </>
    )
}

export { Users as default }
