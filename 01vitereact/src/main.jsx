import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
    return (
        <div>
            <h1>New Custom App</h1>
        </div>
    )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }  
//This is not working because we have not given syntax according to the expectations of React

const anotherUser = "Coffee and Chai"

const ReactElement = React.createElement(
    'a',
    {href:"https://google.com", target: "_blank"},
    'Click to visit Google',
    anotherUser      //we have to always write evaluated expression and not if /else
)

const anotherElement = (
    <a href="https://google.com" target= "_blank">Visit Google</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    ReactElement
  
)
