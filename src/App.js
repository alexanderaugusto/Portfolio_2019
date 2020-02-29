import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import "./assets/css/nucleo-icons.css"
import "./assets/scss/blk-design-system-react.scss?v=1.0.0"
import "./assets/demo/demo.css"
import "./assets/css/app.css"

import routes from './routes'

export default function App() {
  return (
    <BrowserRouter>
      {routes.map((route, key) => <Route exact={route.exact} key={key} path={route.path} component={route.component} />)}
    </BrowserRouter>
  )
}
