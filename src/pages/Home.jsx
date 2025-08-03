import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import EventCard from '../components/cards/EventCard'
import GalleryHighlights from '../components/cards/GalleryHighlights'
import AnnouncementBanner from '../components/cards/AnnouncementBanner'
import Calendar from '../components/Calendar'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <EventCard/>
      <AnnouncementBanner/>
      <GalleryHighlights/>
      <Calendar/>
      <Footer/>

    </div>
  )
}

export default Home
