import React, { useEffect } from 'react'
import { Footer, Navbar } from '../components'

export default function Contact() {
  useEffect(() => {
    document.body.classList.toggle("landing-page")

    return () => document.body.classList.toggle("landing-page")
  }, [])

  return (
    <>
      <Navbar />

      <div className="wrapper">
        <div className="page-header">

        </div>

        <Footer />
      </div>
    </>
  )
}