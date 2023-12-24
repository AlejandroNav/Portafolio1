import React from 'react'
import './about.css'
import cdmx from '../../assets/cdmx.jpg'
import libelula from '../../assets/libelula.png'
const about = () => {
    return (
        <div className='about'>
            <div className="about-left">
                <div className="about-card about-bg"></div>
                <div className="about-card">
                    <img src={cdmx} alt="" />
                </div>
            </div>
            <div className="about-right">
                <h2 className='about-title'>Desarrollo Web</h2>
                <h4 className='about-sub'>Diseño y Desarrollo Profesional de Landing Pages y Aplicaciones Web</h4>
                <p className='about-description'>¿Estás buscando una solución efectiva para potenciar tu presencia en línea? Te ofrezco servicios de diseño y desarrollo
                    de páginas de aterrizaje y aplicaciones web, utilizando las tecnologías más actuales como Vanilla JavaScript, Node.js
                    y React.</p>
                <p className='about-description'> Cada proyecto es una oportunidad para innovar y personalizar, asegurando que tu sitio no solo se vea bien,
                    sino que también cumpla con tus objetivos específicos de negocio. Con un diseño responsivo y una codificación limpia,
                    tu página de aterrizaje o aplicación web destacará en el mundo digital</p>
                <div className="about-award">
                    <img src={libelula} alt="Imagen adorno de una libelula colorida" className="about-award-img" />
                    <div className="about-award-texts">
                        <p className="about-award-sub">
                            Desarrollo Moderno
                        </p>
                        <p className='about-award-text'>Mi enfoque se centra en crear sitios web atractivos, funcionales y optimizados para una experiencia de usuario
                            excepcional.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default about