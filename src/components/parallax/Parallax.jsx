import { useRef } from "react";
import "./parallax.scss"
import { motion, useScroll, useTransform } from "framer-motion";


const Parallax = ({ type }) => {

    const ref = useRef()

const { scrollYProgress } = useScroll({
    target: ref, 
    offset: ["start start", "end start"]
});

const yBg=useTransform(scrollYProgress, [0,1], ["0%", "500%"]);

  return (
    <div className="parallax"
    ref={ref}>

        <motion.h1 style={{ y: yBg }}>PROJECTS</motion.h1>
        <motion.div className="full"></motion.div>
        <motion.div className="bottom"></motion.div>
    </div>
  );
};

export default Parallax