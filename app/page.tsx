import React from 'react'
import Navbar from './components/Navbar'
import Lander from './components/Lander'
import Info from './components/Info'
import Colleges from './components/Colleges'
import Steps from './components/Steps'
import Testimonials from './components/Testimonials'
import Faqs from './components/Faqs'
import Footer from './components/Footer'

function page() {
  return (
    <section className=' bg-white '>
      <Navbar />
      <Lander />
      <Info />
      <Colleges />
      <Steps />
      <Testimonials />
      <Faqs />
      <Footer />
    </section>
  )
}

export default page