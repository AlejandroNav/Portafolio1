import React from 'react'
import './contact.css'
import { Icon } from '@iconify/react';
const Contact = () => {
    return (
        <section className='contact'>
            <div className="contact-bg">
                <div className='contact-wrapper'>
                    <article className='contact-left'>
                        <h1 className="contact-title">Discutamos tu projecto a</h1>
                        <div className="contact-info">
                            <div className='contact-item'>
                                <img src="" alt="" />
                                <Icon icon="tabler:phone" />
                                <Icon icon="line-md:email-opened" />
                                <Icon icon="mdi:map-marker-outline" />
                            </div>
                        </div>
                    </article>
                    <article className='contact-right'>

                    </article>
                </div>
            </div>
        </section>
    )
}

export default Contact