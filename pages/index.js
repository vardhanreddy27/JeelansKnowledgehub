import React from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import WhatWeDoSection from './Components/WhatWeDoSection'
import EnrollmentCTA from './Components/EnrollmentCTA'
import PackagesSection from './Components/PackagesSection'
import FAQSection from './Components/FAQSection'
import TestimonialsSection from './Components/TestimonialsSection'
import ContactSection from './Components/ContactSection'
import Footer from './Components/Footer'

function index() {
  return (
    <div>

<Navbar />
<HeroSection />

<WhatWeDoSection />
<EnrollmentCTA /> 
<PackagesSection />
<FAQSection />
<TestimonialsSection />
<ContactSection />
<Footer />
 </div>
  )
}

export default index
