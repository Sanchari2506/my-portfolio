import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaLinkedin,FaGithubSquare } from "react-icons/fa";

const Contact = () => {

    const [mail, setMail] = useState(false)

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
                setMail(true)
                setTimeout(function(){
                    window.location.href = '/';
                },1500)
            }, (error) => {
                console.log(error.text);
            });
    };

    const downloadResume = ()=>{
        console.log('downloadResume');
        const file_url = '/Sanchari-Rakshit-Resume-2025.pdf'
        const aTag = document.createElement('a')
        aTag.href = file_url
        aTag.setAttribute('download', 'Sanchari-Rakshit-Resume-2025.pdf')
        document.body.appendChild(aTag)
        aTag.click()
        aTag.remove()
    }

    return (
        <div id='contact-section' className='contact-section-container bg-[#020617] w-full h-fi md:py-10 md:px-12'>
            <div className='section-wrappper md:w-[1092px] md:m-auto px-10 md:px-0 py-10 md:py-0'>
                <h2 className='md:text-4xl font-bold text-3xl'>
                    <span>Contact</span>
                    <span style={{ color: '#EAB308' }}> Me</span>
                </h2>
                <p className="py-3 text-xs md:text-base text-[#B0B0B1]">
                    I am a software engineer with three years of expertise in Shopify, specializing in theme customization and Shopify app development. My portfolio showcases my proficiency in crafting tailored e-commerce solutions.
                </p>

                <div className='section-content-wrap md:grid md:grid-cols-2 md:gap-[30px]'>
                    <div className='personal-info py-3'>
                        <h3 className='text-2xl text-white underline pb-3'>Personal Information</h3>
                        <div className='infoe-one'>
                            <p className="text-base py-3">
                                <span className="text-[#EAB308]">Address - </span>
                                9, Bagpota Road, Sarsuna, Kolkata-700061</p>
                            <p className="text-base py-3">
                                <span className="text-[#EAB308]">Phone - </span>
                                +918420281373
                            </p>
                            <p className="text-base py-3">
                                <span className="text-[#EAB308]">Email - </span>
                                sancharirakshit2709@gmail.com
                            </p>
                        </div>
                        <h3 className='text-2xl text-white underline pb-3'>Educational Qualifications</h3>
                        <div className='infoe-two'>
                            <p className="text-base py-3">
                                <span className="text-[#EAB308]">M.Sc in Computer Science and Information </span>
                                <br></br>Sarsuna College, University of Calcutta<br></br>
                                — (68.9%) (CGPA: 7.500), [Aug 2018 - Aug 2020]
                            </p>
                            <p className="text-base py-3">
                                <span className="text-[#EAB308]">B.Sc in Computer Science </span>
                                <br></br>Sarsuna College, University of Calcutta<br></br>
                                — (63.5%), [Aug 2018 - Aug 2020]
                            </p>
                            <button onClick={downloadResume} type="button" id="contantBtn3" className="contact-btn transition duration-1000 my-3 hover:bg-[#000000] hover:text-white hover:border hover:border-[#EAB308]">My Resume</button>
                            {/* <p className="text-base py-3">
                                <span className="text-[#EAB308]">H.S (Science) </span>
                                <br></br>Barisha Girls’ High School<br></br>
                                — (69.6%), [Passed Out 2015]
                            </p>
                            <p className="text-base py-3">
                                <span className="text-[#EAB308]">Madhyamik </span>
                                <br></br>Barisha Girls’ High School<br></br>
                                — (76.86%), [Passed Out 2013]
                            </p> */}
                        </div>
                    </div>
                    <div className='contact-form w-full py-3'>
                        <div className='flex justify-between items-center'>
                        <h3 className='text-2xl text-white underline pb-3'>
                            Get In Touch With Me
                        </h3>
                        <div className='w-fit flex justify-center items-center gap-2'>
                        <a href='https://www.linkedin.com/in/sanchari-rakshit-524a82192/' target='_blank'><FaLinkedin className='text-2xl'/></a>
                        <a href='https://github.com/Sanchari2506' target='_blank'><FaGithubSquare className='text-2xl'/></a>
                        </div>
                        </div>
                        <form ref={form} onSubmit={sendEmail} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                    Name
                                </label>
                                <input name="user_name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter Name"></input>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="useremail">
                                    Email
                                </label>
                                <input name="user_email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="useremail" type="email" placeholder="Enter Email"></input>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="usermessage">
                                    Message
                                </label>
                                <textarea name="message" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id="usermessage" />
                            </div>
                            <button type="submit" id="contantBtn2" className=" w-full contact-btn transition duration-1000 my-3 hover:bg-[#000000] hover:text-white hover:border hover:border-[#EAB308]">Send</button>
                            {/* <input type="submit" value="Send" /> */}
                            {
                                mail ? <p className='text-sm text-green-700'>Mail Send Successfully</p> : <p></p>
                            }
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Contact