import React, { useEffect } from 'react'
import { Footer, Header, Navbar } from '../components'

export default function Contact() {
  useEffect(() => {
    document.body.classList.toggle("index-page")

    return () => document.body.classList.toggle("index-page")
  }, [])

  return (
    <>
      <Navbar />
      <div className="wrapper">
        <Header />

        <div className="main">

        </div>

        <Footer />
      </div>
    </>
  )
}