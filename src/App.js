import React, { useState } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import "./assets/css/nucleo-icons.css"
import "./assets/scss/blk-design-system-react.scss?v=1.0.0"
import "./assets/demo/demo.css"
import "./assets/css/app.css"

import routes from './routes'

export default function App() {
  const [language, setLanguage] = useState(JSON.parse(localStorage.getItem("language")) || "en")

  const setLang = (lang) => {
    setLanguage(lang)
    localStorage.setItem("language", JSON.stringify(lang))
  }

  return (
    <BrowserRouter>
      {routes.map((route, key) => {
        const Component = route.component

        return (
          <Route exact={route.exact}
            key={key}
            path={route.path}
            render={(props) => {
              return (
                <Component {...props}
                  language={language}
                  setLanguage={lang => setLang(lang)} />
              )
            }} />
        )
      })}
    </BrowserRouter>
  )
}
