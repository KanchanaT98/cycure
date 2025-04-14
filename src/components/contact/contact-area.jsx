"use client"
import Link from "next/link";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const contact_data = [
    {
        id: 1,
        icon: "flaticon-chat",
        title: "Chat With Us",
        des: (<>We&apos;ve got live Social Experts waiting to help you monday to friday from 11pm to 7am EST.</>),
        btn: "Chat with us",
    },
    {
        id: 2,
        icon: "flaticon-open-mail",
        title: "Send Us Email",
        des: (<>Simple drop us an email at info@avesto.global and you&apos;ll receive a reply within 24 hours</>),
        btn: "Email Us",
    },
    {
        id: 3,
        icon: "flaticon-iphone",
        title: "Make a Call",
        des: (<>Give us a ring.Our Experts are standing by monday to friday from 11pm to 7am EST.</>),
        btn: "+94 76 732 7788",
    },
]

const ContactArea = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const publicId = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    
        emailjs
          .sendForm(serviceId, templateId, form.current, {
            publicKey: publicId,
          })
          .then(
            () => {
              alert("Message Successfully sent");
              form.current.reset();
            },
            (error) => {
                alert("Message Sending Failed...");
            },
        );
    };

    return (
        <section className="contact-area">
            <div className="contact-info-wrapper">
                <div className="container">
                    <div className="row justify-content-around">
                        {contact_data.map((item) => (
                            <div key={item.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                                <div className="contact-info-item text-center">
                                    <div className="contact-info-icon">
                                        <i className={item.icon}></i>
                                    </div>
                                    <div className="contact-info-content">
                                        <h5 className="title">{item.title}</h5>
                                        <p>{item.des}</p>
                                        <Link href="#" className="contact-info-link">{item.btn}</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div id="map" style={{ backgroundImage: `url(assets/img/bg/Map.png)` }}></div>
            <div className="contact-form-wrap">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-5 col-lg-7 col-md-9 col-sm-10">
                            <div className="section-title text-center mb-50">
                                <h2 className="title">Questions or Comments? Get in Touch</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xxl-8 col-xl-9 col-lg-10">
                            <form ref={form} onSubmit={sendEmail} className="contact-form text-center">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-grp">
                                            <input type="text" name="name" required placeholder="Your full name" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-grp">
                                            <input type="email" name="email" required placeholder="Your email address" />
                                        </div>
                                    </div>
                                    <div className="form-grp">
                                        <textarea name="message" id="message" required placeholder="Write your message..."></textarea>
                                    </div>
                                </div>
                                <button type="submit" value ="Send" className="btn">Send message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactArea
