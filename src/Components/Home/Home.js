import React from 'react'
import Card from '../Card/Card'
import Footer from '../Header/Footer/Footer'
import Navigation from '../Header/Footer/Navigation'
import Testimonials from '../Header/Footer/Testimonials/Testimonials'
import ProductOverview from '../Header/Footer/Testimonials/Testimonials/ProductOverview'
import Hero from '../Hero/Hero'
import SocialBar from '../SocialBar/SocialBar'
import HomeSlider from './HomeSlider'

function Home() {
  return (
    <div>
        <Navigation></Navigation>
        <HomeSlider></HomeSlider>
        <Hero></Hero>
        <Card></Card>
        <Testimonials></Testimonials>
        <ProductOverview></ProductOverview>
        <SocialBar></SocialBar>
        <Footer></Footer>
      
    </div>
  )
}

export default Home
