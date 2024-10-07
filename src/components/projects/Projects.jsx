import "./projects.scss"
import { motion } from "framer-motion"
import { useState, useEffect, useRef } from 'react';
//import './Tagline.scss';

const Projects = () => {
    
    
    const imagesBlock1 = [
        { webp: 'carousel-1-1.webp', fallback: 'carousel-1-1.jpg'},
        { webp: 'carousel-1-2.webp', fallback: 'carousel-1-2.jpg'},
        { webp: 'carousel-1-1.webp', fallback: 'carousel-1-1.jpg'},
        { webp: 'carousel-1-4.webp', fallback: 'carousel-1-4.jpg'}
    ];

    const imagesBlock2 = [
        { webp: 'carousel-2-1.webp', fallback: 'carousel-2-1.jpg'},
        { webp: 'carousel-2-2.webp', fallback: 'carousel-2-2.jpg'},
        { webp: 'carousel-2-3.webp', fallback: 'carousel-2-3.jpg'},
        { webp: 'carousel-2-4.webp', fallback: 'carousel-2-4.jpg'}   

    ];
    const imagesBlock3 = [
    
        { webp: 'carousel-3-1.webp', fallback: 'carousel-3-1.jpg'},
        { webp: 'carousel-3-2.webp', fallback: 'carousel-3-2.jpeg'},
        { webp: 'carousel-3-3.webp', fallback: 'carousel-3-3.jpeg'},
        { webp: 'carousel-4-4.webp', fallback: 'carousel-3-4.jpeg'}

    ];


    const Carousel = ({ images }) => {
        const [currentSlide, setCurrentSlide] = useState(0);
        const carouselRef = useRef(null);
    
        useEffect(() => {
          const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
          }, 2000);
    
          return () => clearInterval(interval);
        }, [images.length]);
    
        return (
          <div className="carousel" ref={carouselRef}>
            <motion.div
              className="carousel__track-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.ul
                className="carousel__track"
                style={{ 
                    transform: `translateX(-${currentSlide * 100}%)`
                }} 
                transition={{ 
                duration: 0.3, 
                ease: [0.6, 0.05, -0.01, 0.9] }}
              >

                {images.map((image, index) => (
                  <motion.li className="carousel__slide" key={index}>
                    <picture>
                    <source srcSet={image.webp} type="image/webp" />
                    <img src={image.fallback} alt={`Imagen ${index + 1}`} loading="lazy" />
                    </picture>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        );
      };

  return (
    <div className="projects">

    <div className="textContainer">
    <h1>PROJECTS</h1>
    </div>    
        <div className="tagline">
            <div className="main-text"> 
    <span className="memories">MEMORIES</span>
    <span className="for">FOR</span> 
    </div>
    <span className="eternity">ETERNITY</span>
        </div>


      <div className="carouselContainer1">
        <Carousel images={imagesBlock1} />
      </div>
      <div className="carouselContainer2">
        <Carousel images={imagesBlock2} />
      </div>
      <div className="carouselContainer3">
        <Carousel images={imagesBlock3} />
      </div>
    </div>
  );
};


export default Projects