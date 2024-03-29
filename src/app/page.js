'use client'
import { Container } from "react-bootstrap"
import TourCarousel from "./components/TourCarousel"
import TourSearch from "./components/TourSearch"

const Home = () => {
  return (
    <Container className="bg-primary">
      <TourCarousel />
      <TourSearch />
    </Container>
  )
}

export default Home