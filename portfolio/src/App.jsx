import { useState } from 'react'
import './App.css'
import TextType from './components/TextType.jsx'
import LiquidEther from './components/LiquidEther.jsx'
import Card from './components/Card.jsx'
import profile from './assets/yo.jpg'
import Carousel from './components/Carousel.jsx'
import LogoSlider from './components/LogoSlider.jsx'
import ChromaGrid from './components/ChromaGrid.jsx'

function App() {

  const items = [
          {
            image: "https://cdn.brandfetch.io/idZAyF9rlg/w/800/h/784/theme/light/symbol.png?c=1dxbfHSJFAPEGdCLU4o5B",
            title: "Proyecto de Tesis",
            subtitle: "Para este proyecto, junto a dos compañeros desarrollamos un sistema completo de gestión de ventas, inventario, clientes y personal para una empresa llamada 'Cami-Bordados'.",
            borderColor: "#06B6D4",
            gradient: "linear-gradient(145deg, #06B6D4, #000)",
            url: "https://github.com/Esttven/Cami-Bordados"
          },
          {
            image: "https://cdn.brandfetch.io/idZAyF9rlg/w/800/h/784/theme/dark/symbol.png?c=1dxbfHSJFAPEGdCLU4o5B",
            title: "Proyecto Final Integrador",
            subtitle: "Este es el backend de un proyecto final de la universidad, es una API Restfull hecha con Django Rest Framework para una app de manejo de tareas y gastos compartidos para roomies o parejas, el frontend de este proyecto fué hecho en Android Studio.",
            borderColor: "#4F46E5",
            gradient: "linear-gradient(180deg, #4F46E5, #000)",
            url: "https://github.com/Elkin8/proyecto_integrador"
          },
          {
            image: "https://cdn.brandfetch.io/idZAyF9rlg/w/800/h/784/theme/light/symbol.png?c=1dxbfHSJFAPEGdCLU4o5B",
            title: "Examen de Desarrollo Móvil",
            subtitle: "Este es un examen que me tomarón en mi clase de desarrollo móvil, donde tuve que construir una app usando Ionic y React.",
            borderColor: "#10B981",
            gradient: "linear-gradient(180deg, #10B981, #000)",
            url: "https://github.com/Elkin8/examen"
          },
          {
            image: "https://cdn.brandfetch.io/idZAyF9rlg/w/800/h/784/theme/dark/symbol.png?c=1dxbfHSJFAPEGdCLU4o5B",
            title: "Proyecto Final Integrador",
            subtitle: "Este es un proyecto final integrador de la universidad, una web que promueve retos ambientales con recompensas para los ganadores.",
            borderColor: "#F59E0B",
            gradient: "linear-gradient(180deg, #F59E0B, #000)",
            url: "https://github.com/Elkin8/ProyectoIntegrador"
          },
          {
            image: "https://cdn.brandfetch.io/idZAyF9rlg/w/800/h/784/theme/light/symbol.png?c=1dxbfHSJFAPEGdCLU4o5B",
            title: "Ejercicios de desarrollo web",
            subtitle: "Estos son algunos ejercicios de desarrollo web propuestos por mi profesor, que resolví en clases para practicar mis habilidades.",
            borderColor: "#EF4444",
            gradient: "linear-gradient(180deg, #EF4444, #000)",
            url: "https://github.com/Elkin8/web-development-projects"
          },
          {
            image: "https://cdn.brandfetch.io/idZAyF9rlg/w/800/h/784/theme/dark/symbol.png?c=1dxbfHSJFAPEGdCLU4o5B",
            title: "Examen de Desarrollo Web",
            subtitle: "Este es un pequeño examen de no más de 15 minutos que me tomarón en mi clase de desarrollo web, donde tuve que demostrar mis skills en CSS.",
            borderColor: "#8B5CF6",
            gradient: "linear-gradient(180deg, #8B5CF6, #000)",
            url: "https://github.com/Elkin8/Examen-primer-parcial"
          },
          {
            image: "https://cdn.brandfetch.io/idZAyF9rlg/w/800/h/784/theme/light/symbol.png?c=1dxbfHSJFAPEGdCLU4o5B",
            title: "Sitio de práctica",
            subtitle: "Este pequeño sitio fué hecho como una práctica realizada en una de mis clases de la universidad, esta web fué realizada en 10 minutos.",
            borderColor: "#06B6D4",
            gradient: "linear-gradient(145deg, #06B6D4, #000)",
            url: "https://github.com/Elkin8/web-development"
          },
        ];

  return (
    <>
      <div
        style={{
          position: 'fixed',  
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,       
          overflow: 'hidden',
          background: '#000'
        }}
      >
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          color: '#fff',
          textAlign: 'center',
        }}
      >
        
        <div 
          style={{
          fontSize: '4rem',
          }}
        >
          <TextType
          text={[
            'Holaaaa, bienvenid@!!',
            'Este es mi portafolio',
            'Y un poco sobre mí...',
          ]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
          />
        </div>

        <Card 
          image={profile} 
          buttonText="Descarga mi CV"
          socialLinks={{
            whatsapp: "https://wa.me/593997661687", 
            instagram: "https://www.instagram.com/elkin.hub/",
            linkedin: "https://www.linkedin.com/in/elkin-guam%C3%A1n-cede%C3%B1o-1795382a1/"
          }}
        >
          <div style={{ 
            flex: 1, 
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Carousel
              baseWidth={400}   
              autoplay={true}
              autoplayDelay={3000}
              pauseOnHover={true}
              loop={true}
              round={false}
            />
          </div>
        </Card>

        <div
          style={{
            fontSize: '2rem',
            margin: '6rem 0 2rem 4rem',
            textAlign: 'left',
          }}
        >
          <TextType
          text={[
            'Tecnologías que manejo:',
            'Tengo experiencia trabajando con diversas tecnologías.',
          ]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
          />
        </div>

        <div>
          <LogoSlider />
        </div>  

        <div
          style={{
            fontSize: '2rem',
            margin: '6rem 0 2rem 4rem',
            textAlign: 'left',
          }}
        >
          <TextType
          text={[
            'Mis proyectos:',
            'Algunos de los proyectos en los que he trabajado.',
          ]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
          />
        </div>   

        <div style={{ position: 'relative', paddingBottom: '2rem' }}>
          <ChromaGrid 
            items={items}
            radius={300}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
          />
        </div>   
      </div>
    </>
  )
}

export default App