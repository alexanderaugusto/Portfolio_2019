import React, { useEffect } from 'react'
import { Footer, Header, Navbar } from '../components'

export default function Home({ language, setLanguage }) {
  const { mainText } = require("../translation/" + language + "/home")

  useEffect(() => {
    document.body.classList.toggle("index-page")

    return () => document.body.classList.toggle("index-page")
  }, [])

  return (
    <>
      <Navbar language={language} setLanguage={setLanguage} />

      <div className="wrapper">

        <Header title={mainText} />

        <div className="section section-nucleo-icons">
          <div className="blur-hover">
            <a href="/about">
              <div className="icons-container blur-item on-screen mt-5">
                {/* Center */}
                <i className="icon icon-info fab fa-dev" />
                {/* Right 1 */}
                <i className="icon icon-info icon-sm fab fa-git" />
                <i className="icon icon-info icon-sm fab fa-github" />
                <i className="icon icon-info icon-sm fab fa-bitbucket" />
                {/* Right 2 */}
                <i className="icon icon-info fab fa-java" />
                <i className="icon icon-info fab fab fa-python" />
                <i className="icon icon-info fab fa-cuttlefish" />
                {/* Left 1 */}
                <i className="icon icon-info icon-sm fas fa-database" />
                <i className="icon icon-info icon-sm fas fa-server" />
                <i className="icon icon-info icon-sm fab fa-aws" />
                {/* Left 2 */}
                <i className="icon icon-info fab fa-react" />
                <i className="icon icon-info fab fa-js-square" />
                <i className="icon icon-info fab fa-node" />
              </div>
              <span className="blur-hidden h5 text-info">
                See about Alexander
              </span>
            </a>
          </div>
        </div>

        <Footer />
      </div>
    </>
  )
}