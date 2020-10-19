import React, { useState } from 'react'
import axios from 'axios'

const Header = ( props ) => {
    const currentUser = props.currentUser ?props.currentUser:false

    const name       = currentUser !== null || currentUser ? currentUser.name : false
    const id         = currentUser !== null || currentUser ? currentUser.id : false
    const isLoggedin = id ?true:false;

    const logout = ( e ) => {
        e.preventDefault()

        axios.post( 'logout' )
            .then( response => window.location.reload( false ) )
    }

    return (
        <header>
            Header
            { isLoggedin &&
                <>
                    <div>
                        Hi, { name }
                    </div>
                    <div>
                        <button id="log-out" onClick={ logout }>Log Out</button>
                    </div>
                </>
            }

        </header>
    )
}

export { Header as default }
