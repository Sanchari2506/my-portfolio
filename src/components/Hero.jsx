import React from 'react'
import Image from '../assets/main-one.png'
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const Hero = () => {
    const downloadResume = () => {
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
        <div id="hero-section" className='hero-section-container pt-[70px] md:px-12 h-fit bg-[#3C4354] px-3'>
            <div className='hero-wrapper flex flex-col-reverse md:flex-row justify-between items-center md:py-14 py-5'>
                <div className='hero-content-container md:w-1/2 w-[300px] typewriter'>
                    <h5 className='welcome-text pt-2 md:pt-0'>Hello, Welcome</h5>
                    <h1 className='my-title py-3 md:py-5 line-1 anim-typewriter'>I am Sanchari Rakshit</h1>
                    <p className='my-para'>I am a web developer and Shopify expert with three years of experience crafting digital solutions. Proficient in web technologies and e-commerce, I bring a passion for creating seamless online experiences. Explore my portfolio to see how I blend design and functionality to drive online success.</p>
                    <button type='button' id="contantBtn"
                        className='contact-btn transition duration-1000 my-3 hover:bg-[#000000] hover:text-white hover:border hover:border-[#EAB308]'
                        onClick={downloadResume}>My Resume</button>
                </div>
                <div className='hero-image-container'>
                    {/* <img src={Image} alt='my-image' loading='eager' className='main-image' /> */}
                    <Player
                        autoplay
                        loop
                        src="https://lottie.host/0d29397b-cbc8-41c7-b729-ab855e9c24ec/FNEBhX0IXz.json"
                        
                    >
                        {/* <Controls visible={true} buttons={['play', 'repeat', 'frame', 'debug']} /> */}
                    </Player>
                </div>
            </div>
        </div>
    )
}

export default Hero