import React from 'react'
import { AiFillCalendar } from "react-icons/ai";
import { BsFillCalendarCheckFill } from "react-icons/bs";
const Experience = () => {
    return (
        <div id="experience-section" className='skill-section-container md:py-10 md:px-12 bg-[#3C4354] px-2 py-12'>
            <div className='section-wrap md:w-[1092px] md:m-auto px-10'>
                <h2 className='skill-heading md:text-4xl font-bold text-3xl'>
                    <span>My</span>
                    <span style={{ color: '#EAB308' }}> Experience</span>
                </h2>
                <p className="py-3 text-xs md:text-base text-[#B0B0B1]">
                    I am a passionate software engineer with 3 years of experience in web development.
                    My journey has been marked by a relentless pursuit of innovation and excellence.
                </p>

                <div className='md:grid md:grid-cols-3 pt-4'>
                    <div className='exp-item py-5 md:border-r border-r-0 border-b border-white md:border-b-0 text-center'>
                        <div className="py-3 flex justify-center items-center gap-[15px]"><BsFillCalendarCheckFill className='text-[#EAB308] text-2xl'/>
                        <span className="text-xl text-center">July-2021 - Dec 2021</span>
                        </div>
                        
                        <p className="pb-2 text-base text-[#B0B0B1]">Techwishes Solutions</p>
                        <h5 className='text-xl text-[#EAB308] text-center'>Internship</h5>
                        <div className='flex justify-center items-center py-3'>
                            <ul className='list-outside list-disc text-left'>
                                <li>Software Engineer</li>
                                <li>Use Figma</li>
                                <li>Figma to Web page </li>
                            </ul>
                        </div>
                    </div>
                    <div className='exp-item py-5 md:border-r border-r-0 text-center border-b border-white md:border-b-0'>
                    <div className="py-3 flex justify-center items-center gap-[15px]">
                        <BsFillCalendarCheckFill className='text-[#EAB308] text-2xl'/>
                        <span className="text-xl">Jan-2022 - Dec 2022</span>
                    </div>
                        
                        <p className="pb-2 text-base text-[#B0B0B1]">Techwishes Solutions</p>
                        <h5 className='text-xl text-[#EAB308] text-center'>Software Engineer</h5>
                        <div className='flex justify-center items-center py-3'>
                            <ul className='list-outside list-disc text-left'>
                                <li>Software Engineer</li>
                                <li>Use Figma</li>
                                <li>Figma to Web page </li>
                            </ul>
                        </div>
                    </div>
                    <div className='exp-item py-5 text-center'>
                    <div className="py-3 flex justify-center items-center gap-[15px]">
                        <BsFillCalendarCheckFill className='text-[#EAB308] text-2xl'/>
                        <span className=" text-xl">Jan-2023 - Current</span>
                    </div>
                        
                        <p className="pb-2 text-base text-[#B0B0B1]">Techwishes Solutions</p>
                        <h5 className='text-xl text-[#EAB308] text-center'>Senior Software Engineer</h5>
                        <div className='flex justify-center items-center py-3'>
                            <ul className='list-outside list-disc text-left'>
                                <li>Software Engineer</li>
                                <li>Use Figma</li>
                                <li>Figma to Web page </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience