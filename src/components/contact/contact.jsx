import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

import { FcCallback, FcAddressBook, FcDepartment } from "react-icons/fc";
import './contact.css'

const contact = () => {

    const form = React.createRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                'service_bh7rjcq',  //emailjs service id
                'template_xhekr6g', //emailjs service id
                form.current,
                'bqyJ6eZfK0EJfsbWU') //emailjs public key (emailjs dashboard kısmında account menüsünde yer almaktadır.)
            .then((result) => {
                console.log(result.text);

            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="contact">
            <div className="contact-full">
                <div className="contact-left">
                    <h1 className="contact-title">Benimle İletişime Geçmek İster misinz?</h1>
                    <div className="contact-info">
                        <div className="contact-info-item">
                            <FcCallback className="contact-icon" />
                            0541 842 00 00
                        </div>
                        <div className="contact-info-item" >
                            <FcAddressBook className="contact-icon" />
                            feritkodal@gmail.com
                        </div>
                        <div className="contact-info-item">
                            <FcDepartment className="contact-icon" />
                            Ankara / Türkiye
                        </div>
                    </div>
                </div>
                <div className="contact-right">
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" placeholder="Adnız" name="user_name" />
                        <input type="text" placeholder="Konu" name="user_subject" />
                        <input type="text" placeholder="Email Adresiniz" name="user_email" />
                        <textarea rows="5" placeholder="Mesajınızı Yazınız" name="message" />
                        <button>Gönder</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default contact