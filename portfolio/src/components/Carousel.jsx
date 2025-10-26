import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

import './Carousel.css';

const DEFAULT_ITEMS = [
  { id: 1, title: 'DATOS PERSONALES', description: 'Nombre: Elkin Guamán\nNacimiento: 12/12/2005\nUbicación: Ecuador\nCorreo: devisonguaman2005@gmail.com' },
  { id: 2, title: 'SOBRE MÍ', description: 'Soy un desarrollador de software que se especializa en el desarrollo web y desarrollo de APIs. Me encanta resolver problemas, aprender nuevas tecnologías y mejorar mis habilidades constantemente.' },
  { id: 3, title: 'HOBBIES', description: 'Me gusta jugar videojuegos, ver series y películas, escuchar música, estudiar sobre tecnologías y practicar mi habilidades, además entreno Artes Marciales Mixtas.' },
];

const GAP = 16;
const SPRING_OPTIONS = { type: 'spring', stiffness: 300, damping: 30 };

export default function Carousel({
  items = DEFAULT_ITEMS,
  baseWidth = 300,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = true,
  round = false
}) {
  const containerPadding = 16;
  const itemWidth = baseWidth - containerPadding * 2;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const containerRef = useRef(null);

  // Pause on hover
  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  // Autoplay
  useEffect(() => {
    if (autoplay && (!pauseOnHover || !isHovered)) {
      const timer = setInterval(() => {
        setCurrentIndex(prev => {
          const nextIndex = prev + 1;
          return loop ? nextIndex % items.length : Math.min(nextIndex, items.length - 1);
        });
      }, autoplayDelay);
      return () => clearInterval(timer);
    }
  }, [autoplay, autoplayDelay, isHovered, loop, items.length, pauseOnHover]);

  const visibleIndex = currentIndex % items.length;
  const currentItem = items[visibleIndex];

  return (
    <div
      ref={containerRef}
      className={`carousel-container ${round ? 'round' : ''}`}
      style={{ width: `${baseWidth}px`, ...(round && { height: `${baseWidth}px`, borderRadius: '50%' }) }}
    >
      <div 
        className="carousel-track"
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          minHeight: '200px'
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentIndex}
            className="carousel-item"
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              left: 0
            }}
            initial={{ x: baseWidth, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -baseWidth, opacity: 0 }}
            transition={SPRING_OPTIONS}
          >
            <div className="carousel-item-content">
              <div className="carousel-item-title">{currentItem.title}</div>
              <p className="carousel-item-description">{currentItem.description}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className={`carousel-indicators-container ${round ? 'round' : ''}`}>
        <div className="carousel-indicators">
          {items.map((_, index) => (
            <motion.div
              key={index}
              className={`carousel-indicator ${visibleIndex === index ? 'active' : 'inactive'}`}
              animate={{ scale: visibleIndex === index ? 1.2 : 1 }}
              onClick={() => setCurrentIndex(index)}
              transition={{ duration: 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}