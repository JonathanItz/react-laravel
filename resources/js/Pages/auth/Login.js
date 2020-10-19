import React from 'react'
import AuthHandler from './Components/AuthHandler'

const loginPage = ( props ) => {
    return <AuthHandler { ...props } form={ true } />
}

export default loginPage;
