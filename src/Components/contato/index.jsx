import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contato.css'

export const Contato = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_m8yay2a', 'template_wyzsvy9', form.current, 'Scm-JY5Za5VMEjZly')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
            <>
            <div class = "formulário">
                <center>
            <form ref={form} onSubmit={sendEmail}>
                <br/>
                <br/>
                <br/>
                <br/>
            <label>Name</label><br/>
            <input type="text" name="name" /><br/><br/>
            <label>Email</label><br/><br/>
            <input type="email" name="email" /><br/><br/>
            <label>Whats</label><br/><br/>
            <input type="text" name="whats" /><br/><br/>
            <label>Message</label><br/><br/>
            <textarea name="message" cols = "22" rows = "5" /><br/><br/>
            <input type="submit" value="Send" /><br/><br/>
            </form>
            </center>
            </div>
            </>
  );
};
