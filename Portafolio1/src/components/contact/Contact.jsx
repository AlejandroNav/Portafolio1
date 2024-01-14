import React from 'react'
import './contact.css'
import { Icon } from '@iconify/react';
const Contact = () => {
    return (
        <section className='contact'>
            <div className="contact-bg">
            </div>
            <div className='contact-wrapper'>
                <article className='contact-left'>
                    <h1 className="contact-title">Discutamos tu projecto</h1>
                    <div className="contact-info">
                        <div className='contact-item'>
                            <Icon icon="tabler:phone" className='contact-icon' />
                            55 9999 9999
                        </div>
                        <div className='contact-item'>
                            <Icon icon="line-md:email-opened" className='contact-icon' />
                            desarrolloweb@libelulas.dev
                        </div>
                        <div className='contact-item'>
                            <Icon icon="mdi:map-marker-outline" className='contact-icon' />
                            Coyoacan, CDMX, Mexico
                        </div>
                    </div>
                </article>
                <article className='contact-right'>
                    <p className="contact-desc">¡Haz realidad tu visión digital hoy! Con nuestro equipo en desarrollo web, transformaremos tus ideas en experiencias impactantes. ¡Eleva tu presencia en línea y alcanza nuevos horizontes! Contáctanos para empezar.</p>
                    <form action="">
                        <input type="text" placeholder='Nombre' name='user_name' />
                        <input type="text" placeholder='Tema' name='user_subject' />
                        <input type="text" placeholder='Usuario' name='user_email' />
                        <textarea name="user_message" id="" cols="30" rows="5" placeholder='mensaje'></textarea>
                        <button type="submit">Enviar</button>
                    </form>
                </article>

            </div>

        </section>
    )
}

export default Contact