import App from "./containers/app/App.jsx"

import React from 'react'
import {render} from 'react-dom'
import { BrowserRouter } from "react-router-dom"

import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

function Main () {
    return (
      <React.StrictMode>
        <BrowserRouter>    
          <App /> 
        </BrowserRouter>
      </React.StrictMode> 
    )
  }

render (     
    <Main/>,
    document.getElementById('root')
)

