import React from 'react'
import NavbarForLandingPage from '../../components/Navbar/NavbarForLandingPage'
import Footer from '../../components/Footer/Footer'
import AboutPage from '@/components/about-page/AboutPage'

const page = () => {
  return (
    <div className="bg-white">
      <NavbarForLandingPage />
      <AboutPage />
      <Footer />
    </div>
  )
}

export default page
