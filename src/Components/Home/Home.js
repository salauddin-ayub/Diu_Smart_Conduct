import React from "react"
import Navigation from "../Header/Navigation/Navigation"
import HomeSlider from "./HomeSlider"
import ServiceCard from "./ServiceCard"

function Home() {
  return (
    <div>
      <Navigation></Navigation>
      <HomeSlider></HomeSlider>
      <ServiceCard></ServiceCard>
    </div>
  )
}

export default Home
