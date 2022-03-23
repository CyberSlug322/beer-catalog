import App from "./containers/app/App.jsx"

import React from 'react'
import {render} from 'react-dom'
import { BrowserRouter } from "react-router-dom"

import {Provider} from 'react-redux'
import store, {persistor} from './redux/index'
import { PersistGate } from 'redux-persist/integration/react'

function Main () {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <React.StrictMode>
            <BrowserRouter>    
               <App /> 
            </BrowserRouter>
          </React.StrictMode>
        </PersistGate>
      </Provider>
    )
  }

render (     
    <Main/>,
    document.getElementById('root')
)

