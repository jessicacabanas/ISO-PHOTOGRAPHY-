import "./services.scss";
import { motion } from "framer-motion";
import { useEffect, useState } from 'react';

const Services = () => {

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  
  const multiplier = [0.1, 0.2, 0.3, 0.4, 0.5];

  return (
    <div className="services">
    <div className="titleContainer">
    <span>SERVICES</span>    

    </div>  

    <div className="textContainer1">
      <div className="box">
        <span className="span1">01</span>
        <span className="span2">EVENTS</span>
        <h3>pre wedding</h3> 
        <h3>wedding</h3> 
        <h3>anniversaries</h3> 
        <h3>quince</h3> 
        <h3>sweet sixteen</h3> 
      </div>

      <div className="box">
        <span className="span1">02</span>
        <span className="span2">PORTRAIT</span>
        <h3>pregnancy</h3> 
        <h3>maternity</h3> 
        <h3>family</h3> 
        <h3>studio photoshoot</h3> 
      </div>

      <div className="box">
        <span className="span1">03</span>
        <span className="span2">COMMERCIAL</span>
        <h3>food and drink</h3> 
        <h3>products</h3> 
        <h3>fashion</h3> 
      </div>
        
    </div>  
    <div className="imageMove">
    <motion.img
          className="move1"
          src="/move1.png" 
          alt="Moving Image 1"
          style={{ position: "absolute" }}
          animate={{
            x: mousePosition.x * multiplier[0],
            y: mousePosition.y * multiplier[0],
          }}
          transition={{
            type: "spring",
            damping: 10,
            stiffness: 50,
            ease: "easeOut",
          }}
        />
        <motion.img
          className="move2"
          src="/move2.png" 
          alt="Moving Image 2"
          style={{ position: "absolute" }}
          animate={{
            x: mousePosition.x * multiplier[1],
            y: mousePosition.y * multiplier[1],
          }}
          transition={{
            type: "spring",
            damping: 10,
            stiffness: 50,
            ease: "easeOut",
          }}
        />
        <motion.img
          className="move3"
          src="/move3.png" 
          alt="Moving Image 3"
          style={{ position: "absolute" }}
          animate={{
            x: mousePosition.x * multiplier[2],
            y: mousePosition.y * multiplier[2],
          }}
          transition={{
            type: "spring",
            damping: 10,
            stiffness: 50,
            ease: "easeOut",
          }}
        />
        <motion.img
          className="move4"
          src="/move4.png" 
          alt="Moving Image 4"
          style={{ position: "absolute" }}
          animate={{
            x: mousePosition.x * multiplier[3],
            y: mousePosition.y * multiplier[3],
          }}
          transition={{
            type: "spring",
            damping: 10,
            stiffness: 50,
            ease: "easeOut",
          }}
        />
    </div> 

           <div className="textContainer2">
    <span className="iso">ISO</span> 
   
    <span className="photo">photo</span>
    <span className="graphy">graphy</span>
    <span className="lets">let's work together</span>
    </div>
       </div>
  )
}

export default Services