import { useScroll, motion } from "framer-motion";
import React, { useRef } from "react";
import LiIcon from "./LiIcon";

const EducationDetails = ({
  degree,
  instituteName,
  instituteLink,
  time,
  address,
  details,
  work
}:{degree?:string,instituteName?:string,time?:string,address?:string,details?:string,instituteLink?:string,work?:string}) => {
  const ref = useRef(null);
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[95%] md:w-[80%] mx-auto flex flex-col items-center justify-between pl-4">
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
    <h3 className="capitalize font-bold sm:font-normal md:text-2xl text-sm">
          {degree}&nbsp;{" "}
          <a
            href={instituteLink}
            target="_blank"
            className="text-primary dark:text-light capitalize"
          >
            @ {instituteName}
          </a>
        </h3>
        <span className="capitalize font-medium md:text-2xl text-sm text-dark/75 ">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-2xl text-sm">{details}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64 sm:my-14 md:my-22">
          <h2 className="font-bold md:text-8xl mb-32 w-full text-center xs:text-4xl text-4xl md:mb-16 ">Education</h2>
          <div className="w-full mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          ref={ref}
          className="bg-dark dark:bg-light absolute rounded-lg top-0 left-0 w-[4px] h-full origin-top sm:left-0"
        />
        <ul>
          <EducationDetails
            degree={"Secondary School Certificate"}
            instituteName={"Khaiara High School"}
            time={"2010-2015"}
            address="Khaiara"
          />
            <EducationDetails
            degree={"Diploma In Engineering"}
            instituteName={"Feni Polytechnic Institute"}
            time={"2015-2019"}
            address="Feni"
          />

        </ul>
      </div>
    </div>
  );
};

export default Education;
