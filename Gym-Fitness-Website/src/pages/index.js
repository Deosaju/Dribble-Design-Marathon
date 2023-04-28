import Navbar from "components/Global/Navbar"
import Hero from "components/Sections/Hero"
import Features from "/components/Sections/Features"
import Footer from "/components/Sections/Footer"

function index() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </>
  )
}

export default index