import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        const serviceID = process.env.REACT_APP_MAIL_SERVICE_ID
        const templateID = process.env.REACT_APP_MAIL_TEMPLATE_ID
        const publicKey = process.env.REACT_APP_MAIL_PUBLIC_KEY
        // console.log(process.env.REACT_APP_MAIL_SERVICE_ID)
        // console.log(process.env.REACT_APP_MAIL_TEMPLATE_ID)
        // console.log(process.env.REACT_APP_MAIL_PUBLIC_KEY)
        e.preventDefault();
        console.log("sendEmail", form)
        emailjs.sendForm(serviceID, templateID, form.current, publicKey)
            .then((result) => {
                console.log(result.text);
                console.log("Send succesfully")
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='bg-[#020617] w-full h-fi'>
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" className='bg-black border-white border' /><br></br><br></br>
                <label>Email</label>
                <input type="email" name="user_email" className='bg-black border-white border' /><br></br><br></br>
                <label>Message</label>
                <textarea name="message" className='bg-black border-white border' /><br></br><br></br>
                <input type="submit" value="Send" />
            </form>
        </div>
    );
}

export default Contact