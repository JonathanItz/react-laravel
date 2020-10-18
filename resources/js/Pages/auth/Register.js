import React from 'react'
import AuthHandler from './Components/AuthHandler'

const registerPage = ( props ) => {
    return <AuthHandler { ...props } form={ false } />
}

export default registerPage;
