import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { BsPatchCheckFill } from "react-icons/bs";
import { TiCancel } from "react-icons/ti";
import "./contact.css";
import {motion, AnimatePresence} from 'framer-motion'

export default function Contact() {
  const form = useRef();
  const serviceId = import.meta.env.VITE_APP_YOUR_SERVICE_ID;
  const templateId = import.meta.env.VITE_APP_YOUR_TEMPLATE_ID;
  const publicId = import.meta.env.VITE_APP_YOUR_PUBLIC_KEY;
  

  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, publicId).then(
      (result) => {
        e.target.reset();
        setSent(true);
      },
      (error) => {
      }
    );
  };

  useEffect(() => {
    setTimeout(() => {
      setSent(false);
    }, 3000);
  }, [sent]);

  return (
    <main className="contact">
      <section className="contactTop">
        <aside className="contactPost">
          <p>
            <span></span>Contact
          </p>
          <h2>Get in Touch</h2>
        </aside>
      </section>
      <section className="contactBody">
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="from_name" placeholder="Name..." />
          <label>Email</label>
          <input type="email" name="user_email" placeholder="Email..." />
          <label>Message</label>
          <textarea name="message" placeholder="message..." />
          <input type="submit" value="Send" />
        </form>
        <div className="alert">
          {sent && (
            <AnimatePresence>   
            <motion.span
            initial={{ x:"50vw" }}
            animate={{ x:0 }}
            transition={{ duration: 1 }}
            exit={{ x:"100vw" }}
            className="alertMessage">
              <p>
                <span className="cancel" onClick={() => setSent(false)}>
                  <TiCancel size={30} />
                </span>
                message sent
                <span>
                  <BsPatchCheckFill size={23} />
                </span>
              </p>
            </motion.span>
            </AnimatePresence>
          )}
        </div>
      </section>
    </main>
  );
}
