import React from 'react'
import Image from '../assets/Group 6.png'
const About = () => {
    return (
        <div id="about-section" className='about-section-container md:py-10 md:px-12 bg-[#020617] px-8 pb-8'>
            <div className='flex flex-col justify-center items-center md:flex-row md:justify-between md:w-[1092px] m-auto'>
                <div className='about-img-wrapper w-full md:w-1/2 flex justify-start items-center'>
                    <div className='about-img-wrap mt-[50px] md:mt-0' style={{ position: 'relative',width:'100%' }}>
                        <img src={Image} alt='my-image' loading='eager' className='main-image-about md:w-[450px] w-full m-auto md:m-0' />
                    </div>
                </div>
                <div className='about-content-wrapper w-full md:w-1/2 pt-4 md:pt-0'>
                    <h2 className='about-heading md:text-4xl font-bold text-3xl'>
                        <span>About</span>
                        <span style={{ color: '#EAB308' }}> Me</span>
                    </h2>
                    <p className='about-para py-3 text-xs md:text-base'>
                        I am a dedicated software engineer with three years of expertise in web development.
                        My passion for crafting efficient and user-friendly web solutions drives me.
                        Proficient in front-end and back-end technologies,
                        I strive to create seamless digital experiences.
                    </p>
                    <p className='about-para py-3 text-xs md:text-base'>
                        I'm a seasoned software engineer with a solid track record of three years in the world of Shopify.
                        My expertise lies in fine-tuning and customizing Shopify themes, as well as developing tailor-made Shopify apps.
                        I'm passionate about e-commerce solutions and continually seek innovative ways to enhance the online shopping experience.
                    </p>
                    <div className='py-3'>
                    <a href="#contact-section"
                        className='contact-btn transition duration-1000 my-3 hover:bg-[#000000] hover:text-white hover:border hover:border-[#EAB308]'
                    >Contact Me</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About