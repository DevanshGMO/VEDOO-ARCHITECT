import React from 'react'
import HeroBanner from '../Components/Homepage/HeroBanner';

import VideoTour from '../Components/Homepage/VideoTour';
import DesignMoodboard from '../Components/Homepage/DesignMoodboard';
import AboutCompany from '../Components/Homepage/AboutCompany';
import MoodServices from '../Components/MoodboardComp/MoodServices';
import Testimonials from '../Components/Homepage/Testimonials';
import ContactForm from '../Components/Homepage/ContactForm';
const Home = () => {
  return (
    <>
    <HeroBanner/>

    <VideoTour/>
    <DesignMoodboard/>
    <AboutCompany/>
    <MoodServices/>
    <Testimonials/>
    <ContactForm/>
    </>
  )
}

export default Home;