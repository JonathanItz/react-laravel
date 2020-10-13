import { App } from '@inertiajs/inertia-react'
import React from 'react'
import ReactDOM from 'react-dom'

const el = document.getElementById( 'app' )

if( el ) {
    ReactDOM.render(
      <App
        initialPage={ JSON.parse( el.dataset.page ) }
        resolveComponent={name => require(`./Pages/${name}`).default}
      />,
      el
    )
}

// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// );
