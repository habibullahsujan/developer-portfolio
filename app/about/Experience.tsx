import { useScroll, motion } from "framer-motion";
import React, { useRef } from "react";
import LiIcon from "./LiIcon";


const ExperienceDetails = ({
    position,
    companyName,
    companyLink,
    time,
    address,
    work,
}: { position: string, companyName: string, companyLink: string, time: string, address: string, work: string }) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[95%] md:w-[80%] mx-auto flex flex-col items-center justify-between pl-4">
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 52 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <h3 className="capitalize text-2xl sm:text-xl xs:text-lg">
                    {position}&nbsp;{" "}
                    <a
                        href={companyLink}
                        target="_blank"
                        className="text-primary capitalize"
                    >
                        @ {companyName}
                    </a>
                </h3>
                <span className="capitalize font-medium text-dark/75 xs:text-sm">
                    {time} | {address}
                </span>
                <p className="font-medium w-full md:text-sm">{work}</p>
            </motion.div>
        </li>
    );
};

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"],
    });
    return (
        <div className="my-64 xs:my-8 sm:my-20 md:sm-28">
            <h2 className="font-bold md:text-8xl mb-32 w-full text-center xs:text-4xl text-4xl md:mb-16">
                Professional Courses
            </h2>
            <div className=" md:w-full mx-auto relative">
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    ref={ref}
                    className="dark:bg-light bg-dark absolute rounded-lg top-0 left-0 w-[4px] h-full origin-top sm:left-0"
                />
                <ul>
                    <ExperienceDetails
                        position={"Web Developer-level-1"}
                        companyName={"Programming Hero"}
                        address={"Dhaka"}
                        time={"January-2023 to July-2023"}
                        companyLink={"https://web.programming-hero.com"}
                        work={
                            'It was a complete web development course there focused on front-end development. There I completed an intensive web development course that provided a comprehensive education in both front-end and back-end technologies. The curriculum covered HTML and CSS for building responsive and visually appealing web pages, along with JavaScript to create dynamic and interactive user experiences, including advanced features from ES6+. I gained experience using Tailwind CSS and Bootstrap to efficiently design modern, utility-first, and responsive user interfaces, while also leveraging Material-UI components for consistent UI design. On the server side, I developed skills in building robust applications with Node.js and Express.js, focusing on RESTful API design and implementation. The course also included Redux for effective state management in complex web applications and MongoDB for designing and managing databases, allowing for scalable data storage solutions. This comprehensive course equipped me with the necessary skills to build full-stack web applications, enabling me to proficiently handle both client-side and server-side development tasks.'
                        }
                    />
                    <ExperienceDetails
                        position={"Web Developer-level-2"}
                        companyName={"Programming Hero"}
                        address={"Dhaka"}
                        time={"January-2024 to Running"}
                        companyLink={"https://web.programming-hero.com"}
                        work={
                            "It was a full stack web development course.There I completed a comprehensive Level 2 web development course that significantly enhanced my skills in several advanced technologies. During this course, I gained proficiency in TypeScript, enabling me to write more robust and scalable applications. I mastered Next.js for server-rendered React applications, and delved into advanced Redux for state management. The course also covered Mongoose and Prisma, providing a strong foundation in both NoSQL and SQL database interactions. Additionally, I explored GraphQL for efficient data fetching and manipulation. Currently, I am expanding my knowledge further by learning PostgreSQL and Docker, which are essential for building and deploying modern web applications. This experience has equipped me with a versatile skill set, allowing me to tackle complex web development challenges effectively."
                        }
                    />


                </ul>
            </div>
        </div>
    );
};

export default Experience;
