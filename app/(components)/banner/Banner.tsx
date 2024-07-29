import Image from 'next/image'
import React from 'react'
import profileImage1 from '@/assets/images/developer-profile-img-removebg.png'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import lightImage from '@/assets/svgs/miscellaneous_icons_1.svg'
import Link from 'next/link'
const Banner = () => {
    return (
        <section className='block md:flex items-center justify-between gap-4 px-8  mx-auto relative'>
            <div className="flex-1 pb-8 md:pb-0">
                <Image
                    src={profileImage1}
                    alt="profile image"
                    // layout="responsive" // Enables responsive image
                    width={500} // Width in pixels
                    height={300} // Height in pixels
                    priority
                />

            </div>
            <div className="flex-1 pb-8 md:pb-0 flex flex-col gap-y-5 items-start">
                <h1 className="text-2xl md:text-5xl font-bold">
                    Turning Vision Into Reality With Code And Design.
                </h1>

                <p className="my-4 text-base font-medium sm:text-sm">
                    As a skilled full-stack developer, I am dedicated to turning ideas
                    into innovative web applications. Explore my latest projects and
                    articles, showcasing my expertise in React.js and web development.
                </p>
                <div className="flex items-center">
                    <Link
                        href={"/files/Developer-Resume.pdf"}
                        target="_blank"
                        className="dark:bg-light dark:text-dark hover:dark:border-light hover:dark:bg-dark hover:dark:text-light flex items-center bg-dark text-light p-2 px-4 rounded-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
                        download={true}
                    >
                        Resume <FaRegArrowAltCircleRight className={"w-6 ml-1"} />{" "}
                    </Link>
                    <Link
                        href={"mailto:habibsujan007@gmail.com"}
                        className="px-4 underline"
                    >
                        Contact
                    </Link>
                </div>
            </div>
            <div className="absolute right-8 -bottom-24 inline-block w-24">
                <Image className="w-full h-auto" src={lightImage} alt="light icon" />
            </div>
        </section>
    )
}

export default Banner