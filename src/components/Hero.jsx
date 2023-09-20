import React from 'react'
import Image from '../assets/main-one.png'

const Hero = () => {
    return (
        <div className='hero-section-container pt-[70px] px-12 h-fit bg-[#3C4354]'>
            <div className='hero-wrapper flex flex-col-reverse md:flex-row justify-between items-center md:py-14 py-5'>
                <div className='hero-content-container md:w-1/2'>
                    <h5 className='welcome-text pt-2 md:pt-0'>Hello, Welcome</h5>
                    <h1 className='my-title py-5'>I am Sanchari Rakshit</h1>
                    <p className='my-para'>I am a web developer and Shopify expert with three years of experience crafting digital solutions. Proficient in web technologies and e-commerce, I bring a passion for creating seamless online experiences. Explore my portfolio to see how I blend design and functionality to drive online success.</p>
                    <button type='button' id="contantBtn" className='contact-btn my-3'>Contant Me</button>
                </div>
                <div className='hero-image-container'>
                    <img src={Image} alt='my-image' loading='eager' className='main-image' />
                </div>
            </div>
        </div>
    )
}

export default Hero