import React from 'react'
import './intro.css'
const Intro = () => {
    return (
        <section className='i'>
            <article className="i-left">
                <div className="i-left-wrapper">
                    <h2 className='i-intro'>Hola, mi nombre es </h2>
                    <h1 className='i-name'>Alex Nava</h1>
                    <div className='i-title'>
                        <div className="i-title-wrapper">
                            <div className='i-title-item'>Web Developer</div>
                            <div className='i-title-item'>Disenador UI/UX</div>
                            <div className='i-title-item'>Escritor tecnico</div>
                            <div className='i-title-item'>Creador de Contenido</div>
                            <div className='i-title-item'>Especialista de Accesibilidad</div>
                        </div>
                    </div>
                    <div className='i-desc'>
                        <p>Soy un ingeniero de software mexicano y especialista en accesibilidad,
                            me encanta mezclar el arte del diseño con el tecnicismo de la informática
                            para crear experiencias de usuario cautivadoras y abiertas para todas las personas
                        </p>
                    </div>
                </div>
            </article>
            <article className="i-right">
                right</article>
        </section>
    )
}
export default Intro