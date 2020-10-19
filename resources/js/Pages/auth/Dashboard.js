import React from 'react'
import { InertiaLink } from '@inertiajs/inertia-react'
import Header from '../Components/Header'

const Dashboard = ( props ) => {
    const { current_user: currentUser } = props

    return (
        <>
            <Header currentUser={ currentUser } />
            Dashboard
            <InertiaLink href="/">Home</InertiaLink>
        </>
    )
}

export { Dashboard as default }
