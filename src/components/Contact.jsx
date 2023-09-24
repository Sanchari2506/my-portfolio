import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {

      e.preventDefault();
      console.log("sendEmail", form)
    //   emailjs.sendForm('service_w7teahm', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    //     .then((result) => {
    //         console.log(result.text);
    //     }, (error) => {
    //         console.log(error.text);
    //     });
    };
  
    return (
      <div className='bg-[#020617] w-full h-fi'>
        <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" className='bg-black border-white border'/><br></br><br></br>
        <label>Email</label>
        <input type="email" name="user_email" className='bg-black border-white border'/><br></br><br></br>
        <label>Message</label>
        <textarea name="message" className='bg-black border-white border'/><br></br><br></br>
        <input type="submit" value="Send" />
      </form>
      </div>
    );
}

export default Contact