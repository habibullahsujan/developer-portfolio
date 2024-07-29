'use client'
import React, { useState } from 'react'
import { TransitionEffect } from '../(components)/TransitionEffect'
import Card from './Card'
import hubnexImage from '@/assets/images/hubnex-frontend1.png'
import NikeShoesImg from '@/assets/images/nike-shoes-frontend.png'
import AiSaasImg from '@/assets/images/Ai-saas.png'
import event360Img from '@/assets/images/event-360.png'
import blogSiteImg from '@/assets/images/blog-souce-img.png'
import chocolateShopImg from '@/assets/images/chocolate-shop-frontend.png'
import { StaticImageData } from 'next/image'
type TCardProps={
  name: string,
  description: string,
  image: StaticImageData,
  technology: string[],
  liveLink: string,
  githubLink: string,
  category: string[]
}

const Projects = () => {

  const projectsData = [
    { name: 'Hubnex', description: 'Hubnex is a frontend application showcasing my work as a developer. It uses React for building an interactive interface, Tailwind CSS for responsive styling, and Framer Motion for animations.', image: hubnexImage, technology: ['HTML', 'CSS', 'React', 'Tailwind',], liveLink: 'https://hubnex.netlify.app', githubLink: 'https://github.com/habibullahsujan/hubnex', category: ['design', 'front-end'] },
    { name: 'Nike-Shoes', description: 'This is a small e-commerce website home page.Where i used my design knowledge to make it good.It is  mobile responsive site.', image: NikeShoesImg, technology: ['React', 'Redux', 'Firebase'], liveLink: 'https://stellar-arithmetic-70d53e.netlify.app/', githubLink: 'https://github.com/habibullahsujan/nike-shoes', category: ['design', 'front-end'] }, {
      name: 'Open-Ai-SAAS', description: 'In this saas app i use Open-ai api to generate image,content,video,music,code.It provide 5 free api call after 5 is finished it will not generate any command without payment.', image: AiSaasImg, technology: ['React', 'GPT-3 API', 'Tailwind', 'Stripe'], liveLink: 'https://personal-open-ai.vercel.app', githubLink: 'https://github.com/habibullahsujan/personal-openAi', category: ['design', 'front-end']
    },
    { name: 'Event-360', description: 'This is event company profile and service page. Where i implement good and mobile responsive design.', image: event360Img, technology: ['React', 'Tailwind', 'Redux'], liveLink: 'https://event-360-client-nine.vercel.app/', githubLink: 'https://github.com/habibullahsujan/event-360-client', category: ['design', 'front-end'] },

    { name: 'Source Blog', description: "This is my personal blog page where i implement SEO and content writing.", image: blogSiteImg, technology: [], liveLink: "https://source-blog.vercel.app/", githubLink: 'https://github.com/habibullahsujan/source-log', category: ['design', 'front-end'] },

    { name: 'Chocolate Shop', description: "This is a chocolate shop front-end design i am now working on this project and implement backend and role based login and dashboard system.", image: chocolateShopImg, technology: [], liveLink: 'https://chocolate-shop-six.vercel.app', githubLink: 'https://github.com/habibullahsujan/chocolate-shop', category: ['design', 'front-end'] },

  ]
  const [projects,setProjects]=useState<TCardProps[]| undefined>(projectsData)
  const handleAllProjects=()=>{

    setProjects(projectsData)

  }
  const handleFrontEndProjects=()=>{
    setProjects(projectsData.filter(project=>project.category.includes('front-end')))
  }
  const handleBackendProjects=()=>{
    setProjects(projectsData.filter(project=>project.category.includes('back-end')))
  }
  const handleFullStackProjects=()=>{
    setProjects(projectsData.filter(project=>project.category.includes('full-stack')))
  }
  return (
    <section>
      <TransitionEffect />
      <div className='w-full md:w-3/4 mx-auto p-7'>
        <div className='flex items-center gap-4 pb-12'>
          <button onClick={handleAllProjects} className='transition-all h-1 inline-block hover:border-b border-black'>All Projects</button>
          <button onClick={handleFrontEndProjects} className='transition-all h-0.5 inline-block hover:border-b border-black'>Front-End</button>
          <button onClick={handleBackendProjects} className='transition-all h-0.5 inline-block hover:border-b border-black'>Backend</button>
          <button onClick={handleFullStackProjects} className='transition-all h-0.5 inline-block hover:border-b border-black'>Full-Stack</button>
        </div>
        <div className='grid grid-cols-12'>
          {
            projects?.map((project, index) => <Card key={index} project={project} index={index} />)
          }
        </div>
      </div>
    </section>
  )
}

export default Projects