'use client'
import React, { useEffect, useRef } from 'react'
import { TransitionEffect } from '../(components)/TransitionEffect'
import Image from 'next/image'
import profilePic from '@/assets/images/developer-pic-2.jpg'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from './Skills'
import Experience from './Experience'
import Education from './Education'
import AnimatedText from '../(components)/AnimatedText'



const AnimatedNumber = ({ value }: { value: any }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [value, isInView, motionValue]);

  useEffect(() => {
    springValue.on("change", (latestValue) => {
      if (ref.current && latestValue.toFixed(0) <= value) {
        ref.current.textContent = latestValue.toFixed(0);
      }
    });
  });
  return <span ref={ref}></span>;
};
const AboutPage = () => {

  return (
    <main className="px-8 mx-auto">
      <TransitionEffect />
      <section className="pt-12">
        <AnimatedText
            text={"Passion Fuels Purpose!"}
            className="!text-6xl
            xs:!text-2xl sm:!text-2xl md:!text-4xl mb-12"
          />
        <div className="grid grid-cols-12 gap-8 place-items-center">
          <div className="col-span-12 md:col-span-4 flex flex-col items-start justify-start">
            <h2 className="my-4 text-lg md:text-2xl font-bold uppercase text-dark/75 dark:text-light ">
              Biography
            </h2>
            <p className="font-medium">
            I am a dedicated web developer with a strong foundation in both front-end and back-end technologies. My journey began with mastering HTML, CSS, and JavaScript, which laid the groundwork for creating responsive and user-friendly web applications. With expertise in Tailwind CSS, Bootstrap, and Material-UI, I can craft visually appealing and mobile-responsive interfaces, while my skills in Node.js and Express.js enable me to develop robust server-side applications.
            </p>
            <p className="font-medium">
            I have gained proficiency in state management through Redux and database design using MongoDB. In addition, I have expanded my knowledge in advanced web development technologies, focusing on TypeScript and Next.js for scalable and maintainable code. My experience with Mongoose and Prisma has provided me with a strong understanding of both NoSQL and SQL databases, and I use GraphQL for efficient data fetching.
            </p>
            <p className="font-medium">
            Currently, I am enhancing my skills by learning PostgreSQL and Docker, which are crucial for building and deploying modern, scalable web applications. With a diverse skill set and a commitment to staying updated with the latest technologies, I am well-equipped to tackle complex web development challenges and deliver innovative solutions.
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 sm:my-12 relative h-max rounded-2xl border-2 border-solid border-dark bg-light dark:bg-light p-8">
            <div className="absolute top-0 -right-3 -z-10 bg-dark w-[102%] h-[103%] dark:bg-light rounded-[1.5rem]" />
            <Image
              src={profilePic}
              alt="profile"
              className="rounded-2xl"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />
          </div>
          <div className="col-span-12 md:col-span-4 flex flex-col items-end justify-center gap-4 md:gap-10">
            <div className='flex flex-col items-end'>
              <span className='font-bold text-4xl md:text-7xl'>
                <AnimatedNumber value={5} />+
              </span>
              <h2 className='text-2xl md:font-4xl font-bold'>
                Satisfied Client
              </h2>
            </div>
            <div className='flex flex-col items-end'>
              <span className='font-bold text-4xl md:text-7xl'>
                <AnimatedNumber value={20} />+
              </span>
              <h2 className='text-2xl md:font-4xl font-bold'>
                Projects
              </h2>
            </div>
            <div className='flex flex-col items-end'>
              <span className='font-bold text-4xl md:text-7xl'>
                <AnimatedNumber value={2} />
              </span>
              <h2 className='text-2xl md:font-4xl font-bold'>
                Year of experience
              </h2>
            </div>
          </div>
        </div>
       <div className='w-full md:w-2/3 mx-auto'>
       <div className="my-10">
          <Skills />
        </div>
        <div className="my-10">
          <Experience />
        </div>
        <div className="my-60">
          <Education />
        </div>
       </div>
      </section>
    </main>
  )
}

export default AboutPage