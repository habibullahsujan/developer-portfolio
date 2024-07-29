'use client'
import React, { useState } from 'react'
import { CustomLink } from './CustomLink';
import { motion } from 'framer-motion'
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FcDribbble } from "react-icons/fc";
import { IoMdSunny } from "react-icons/io";
import { IoMdMoon } from "react-icons/io";
import { CustomMobileLink } from './CustomMobileLink';
import Logo from './Logo';
import { GiHamburgerMenu } from "react-icons/gi";
import HireMeButton from './HireMeButton';


const Navbar = () => {
    const [mode, setMode] = useState('');
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <header >
            <section className='flex md:hidden px-8 py-6 items-center justify-between'>
                <div className='relative'>
                    <GiHamburgerMenu onClick={handleClick} className='h-8 w-8' />
                    {
                        open && <motion.div onClick={()=>setOpen(false)} initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.8,ease:'linear'}} className=' absolute top-12 left-1/2 translate-x-[20%] flex flex-col items-center justify-center p-4 bg-[rgba(193,186,186,0.82)] z-50'>
                            <div className='' >
                                <CustomLink href={"/"} title={"Home"} className="mr-4" />
                                <CustomLink href={"/about"} title={"About"} className="mr-4" />
                                <CustomLink href={"/projects"} title={"Projects"} className="mr-4" />
                            </div>
                            <nav className='flex items-center justify-center gap-x-4'>
                                <motion.a
                                    href={"https://x.com/HabibSujan15646"}
                                    target="_blank"
                                    whileHover={{ y: 4 }}
                                    whileTap={{ scale: 0.9 }}

                                >
                                    <BsTwitterX className='h-6 w-6' />
                                </motion.a>
                                <motion.a
                                    href={"https://github.com/habibullahsujan"}
                                    target="_blank"
                                    whileHover={{ y: 4 }}
                                    whileTap={{ scale: 0.9 }}

                                >
                                    <FaGithub className='h-6 w-6' />
                                </motion.a>
                                <motion.a
                                    href={"https://www.linkedin.com/in/habib-ullah-sujan"}
                                    target="_blank"
                                    whileHover={{ y: 4 }}
                                    whileTap={{ scale: 0.9 }}

                                >
                                    <FaLinkedin className='h-6 w-6' />
                                </motion.a>
                                <motion.a
                                    href={"https://www.pinterest.com/habibsujan007"}
                                    target="_blank"
                                    whileHover={{ y: 4 }}
                                    whileTap={{ scale: 0.9 }}

                                >
                                    <FaPinterest className='h-6 w-6' />
                                </motion.a>
                                <motion.a
                                    href={"https://dribbble.com/habibsujan"}
                                    target="_blank"
                                    whileHover={{ y: 4 }}
                                    whileTap={{ scale: 0.9 }}

                                >
                                    <FcDribbble className='h-6 w-6' />
                                </motion.a>
                                {/* <button
                            onClick={() => setMode(mode === "light" ? "dark" : "light")}
                            className={`ml-2 rounded-full p-1 flex justify-center ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
                                }`}
                        >
                            {mode === "dark" ? (
                                <IoMdSunny className={"fill-dark h-6 w-6"} />
                            ) : (
                                <IoMdMoon className={"fill-dark h-6 w-6"} />
                            )}
                        </button> */}
                            </nav>
                        </motion.div>
                    }</div>
                <div>
                    <HireMeButton />
                </div>
            </section>
            <section className='hidden md:flex justify-between items-center px-14 py-8'>
                <div>
                    <CustomLink href={"/"} title={"Home"} className="mr-4" />
                    <CustomLink href={"/about"} title={"About"} className="mr-4" />
                    <CustomLink href={"/projects"} title={"Projects"} className="mr-4" />
                    {/* <CustomLink href={"/articles"} title={"Articles"} className="mr-4" /> */}
                </div>
                <div>
                    {/* <Logo /> */}
                </div>
                <nav className='flex items-center justify-center gap-x-4'>
                    <motion.a
                        href={"https://x.com/HabibSujan15646"}
                        target="_blank"
                        whileHover={{ y: 4 }}
                        whileTap={{ scale: 0.9 }}

                    >
                        <BsTwitterX className='h-6 w-6' />
                    </motion.a>
                    <motion.a
                        href={"https://github.com/habibullahsujan"}
                        target="_blank"
                        whileHover={{ y: 4 }}
                        whileTap={{ scale: 0.9 }}

                    >
                        <FaGithub className='h-6 w-6' />
                    </motion.a>
                    <motion.a
                        href={"https://www.linkedin.com/in/habib-ullah-sujan"}
                        target="_blank"
                        whileHover={{ y: 4 }}
                        whileTap={{ scale: 0.9 }}

                    >
                        <FaLinkedin className='h-6 w-6' />
                    </motion.a>
                    <motion.a
                        href={"https://www.pinterest.com/habibsujan007"}
                        target="_blank"
                        whileHover={{ y: 4 }}
                        whileTap={{ scale: 0.9 }}

                    >
                        <FaPinterest className='h-6 w-6' />
                    </motion.a>
                    <motion.a
                        href={"https://dribbble.com/habibsujan"}
                        target="_blank"
                        whileHover={{ y: 4 }}
                        whileTap={{ scale: 0.9 }}

                    >
                        <FcDribbble className='h-6 w-6' />
                    </motion.a>
                    {/* <button
                        onClick={() => setMode(mode === "light" ? "dark" : "light")}
                        className={`ml-2 rounded-full p-1 flex justify-center ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
                            }`}
                    >
                        {mode === "dark" ? (
                            <IoMdSunny className={"fill-dark h-6 w-6"} />
                        ) : (
                            <IoMdMoon className={"fill-dark h-6 w-6"} />
                        )}
                    </button> */}
                </nav>
            </section>

        </header>
    )
}

export default Navbar