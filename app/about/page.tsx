import React from 'react'
import { Metadata } from 'next'
import AboutPage from './AboutPage'
export const metadata: Metadata = {
  title: "Habib (Web-Developer) | About",
  description: "",
};

const About = () => {
  return (
    <>
    <AboutPage/>
    </>
  )
}

export default About