import HeroAbout from "@/app/landing/components/About/HeroAbout"
import HeroSection from "@/app/landing/components/About/HeroSection"
import HowItWorks from "@/app/landing/components/About/HowItWorks"
import OurTeam from "@/app/landing/components/About/OurTeam"
import StatisticsSection from "@/app/landing/components/About/StatisticsSection"
import WhatWeOffer from "@/app/landing/components/About/WhatWeOffer"
import Footer from "@/app/landing/components/Home/footer/footer"

function About() {
  return (
    <div>
      <HeroAbout/>
      <HowItWorks/>
      <StatisticsSection/>
      <OurTeam/>
      <HeroSection/>
      <WhatWeOffer/>
      <Footer/>
    </div>
  )
}

export default About
