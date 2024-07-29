import React from 'react';
import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import Project1 from '@/assets/images/developer-pic-1.png'
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Link from 'next/link';
type TCardProps={
  name: string,
  description: string,
  image: StaticImageData,
  technology: string[],
  liveLink: string,
  githubLink: string,
  category: string[]
}
const Card = ({ project,index }:{project:TCardProps,index:number}) => {

    return (
        <motion.div className={`cursor-pointer rounded-xl col-span-12 flex items-center justify-between transition-all gap-x-3 my-8 ${index %2 ===0? 'flex-col md:flex-row-reverse':"flex-col md:flex-row"}`}>
            <div className='flex-1'>
                <Image className='w-full project-img h-[300px]' src={project?.image ? project.image : Project1} alt='website image' />
            </div>
            <div className='flex-1 pt-5'>
                <h2 className='py-4 font-bold text-4xl'>{project?.name}</h2>
                <p>{project?.description}</p>
                <div className='flex items-center gap-x-3 py-7'>
                    <Link href={project?.githubLink} target='_blank'>
                        <FaGithub className='h-8 w-8 hover:fill-blue-800' />
                    </Link>
                    <Link href={project?.liveLink} target='_blank'>
                        <FaExternalLinkAlt className='h-8 w-8 8 hover:fill-blue-800 ' />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default Card;
