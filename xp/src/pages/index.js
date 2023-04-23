import React from 'react'
import Navbar from 'components/Global/Navbar'
import Hero from 'components/Sections/Hero'
import Features from 'components/Sections/Features'

function index() {
  return (
    <div style={{ position: "relative" }} >
      <Navbar />
      <Hero />
      <Features />
    </div>
  )
}

export default index