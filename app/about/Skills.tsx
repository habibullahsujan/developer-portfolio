import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, className = "" }: { name: string, className?: string }) => {
    return (
        <motion.div
            className={` absolute flex items-center justify-center rounded-3xl font-semibold bg-dark text-light shadow-dark cursor-pointer dark:bg-light dark:text-dark p-3  ${className}`}
            whileHover={{ scale: 1.05 }}
            initial={{ x: '50%', y: '50%' }}
            whileInView={{ x: 0, y: 0, transition: { duration: 1.5 } }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
        >
            <span>{name}</span>
        </motion.div>
    );
};


const Skills = () => {

    const skillsData = [
        {
            name: "HTML", className: "top-[45%] left-1/3",
        },
        { name: "CSS", className: "top-[45%] left-[58%]",},
        {
            name: "JavaScript", className: "top-[20%] left-[45%]",
        },
        {
            name: "TypeScript", className: "top-[70%] left-[45%]",
        },
        {
            name: "React-JS", className: "top-[45%] left-[69%]" ,
        },
        {
            name: "Next-JS", className: "top-[45%] left-[20%]" ,
        },
        {
            name: "Tailwind", className: "top-[15%] left-[22%]"
        },
        {
            name: "Express-JS", className: "top-[15%] left-[65%]" ,
        },
        {
            name: "MongoDB", className: "top-[70%] left-[20%]" ,
        },
        {
            name:"Redux", className: "top-[70%] left-[70%]",
        },
        {
            name: "GraphQL", className: "-top-[4%] left-[45%]" ,
        },
        {
            name: "Prisma", className: "top-[45%] -left-[3%]" ,
        },
        {
            name: "Node-JS", className:"top-[45%] -right-[4%]" ,
        },
        {
            name: "Material-UI", className: "-bottom-[3%] left-[45%]",
        },

    ]
    return (
        <div
        >
            <h2 className="font-bold text-6xl mt-24 mb-8 h-full text-center">
                Skills
            </h2>
            <div className="w-full h-[500px] mx-auto rounded-[50%] relative flex items-center justify-center " style={{ background: "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 100px)", }}>
                <motion.div
                    className="absolute flex items-center justify-center rounded-full font-semibold bg-dark text-light p-6 shadow-dark cursor-pointer dark:bg-light dark:text-dark lg:p-6 md:p-4 xs:text-xs xs:p-2"
                    whileHover={{ scale: 1.05 }}
                >
                    Web
                </motion.div>
                {
                    skillsData.map((skill, index) => (
                        <Skill key={index} {...skill}  name={skill.name} className={skill.className}/>
                    ))
                }
                
            </div>
        </div>
    );
};
export default Skills