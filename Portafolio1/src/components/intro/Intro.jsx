import React from 'react'
import './intro.css'
import alexImg from '../../assets/alejandro.png'

const Intro = () => {
    return (
        <section className='i'>
            <article className="i-left">
                <div className="i-left-wrapper">
                    <h2 className='i-intro'>Hola, mi nombre es </h2>
                    <h1 className='i-name'>Alex Nava</h1>
                    <div className='i-title'>
                        <div className="i-title-wrapper">
                            <div className='i-title-item'>Software Engineer</div>
                            <div className='i-title-item'>Web Developer</div>
                            <div className='i-title-item'>Diseñador UI/UX</div>
                            <div className='i-title-item'>Traductor Profesional</div>
                            <div className='i-title-item'>Escritor Técnico</div>
                            <div className='i-title-item'>Creador de Contenido</div>
                            <div className='i-title-item'>Especialista en Accesibilidad</div>
                        </div>
                    </div>
                    <div className='i-desc'>
                        Soy un ingeniero de software mexicano y especialista en accesibilidad,
                        me encanta mezclar el arte del diseño con el tecnicismo de la informática.
                    </div>
                </div>
            </article>
            <article className="i-right">
                <div className='i-bg'></div>
                <img src={alexImg} alt="Fotografia de Alejandro Nava" className='i-img' />
            </article>
        </section>
    )
}
export default Intro