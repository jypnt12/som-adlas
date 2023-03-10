import React from 'react'
import AboutSection from '../components/AboutSection'
import FaqSection from '../components/FaqSection'
import ServicesSection from '../components/ServicesSection'
//Animations
import { motion } from 'framer-motion';
import { pageAnimation } from "../animation"

const AboutUs = () => {
  return (
    <motion.div exit='exit' variants={pageAnimation} initial='hidden' animate='show'>
        <AboutSection/>
        
        <FaqSection/>
        <ServicesSection/>
    </motion.div>
  )
}

export default AboutUs