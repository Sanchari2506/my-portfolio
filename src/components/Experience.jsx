import React from 'react'

const Experience = () => {
    return (
        <div id="experience-section" className='skill-section-container md:py-10 md:px-12 bg-[#3C4354] px-2 py-12'>
            <div className='section-wrap md:w-[1092px] md:m-auto'>
                <h2 className='skill-heading md:text-4xl font-bold text-3xl'>
                    <span>My</span>
                    <span style={{ color: '#EAB308' }}> Experience</span>
                </h2>
                <p className="py-3 text-xs md:text-base text-[#B0B0B1]">
                    I am a passionate software engineer with 3 years of experience in web development.
                    My journey has been marked by a relentless pursuit of innovation and excellence.
                </p>

                <div className='md:grid md:grid-cols-3'>
                    <div className='exp-item md:border-r border-r-0 md:border-white text-center'>
                        <p className="py-3 text-xl">July-2021 - Dec 2021</p>
                        <p className="pb-2 text-base text-[#B0B0B1]">Techwishes Solutions</p>
                        <h5 className='text-xl text-[#EAB308] text-center'>Internship(Software Engineer)</h5>
                        <div className='flex justify-center items-center py-3'>
                            <ul className='list-outside list-disc text-left'>
                                <li>Software Engineer</li>
                                <li>Use Figma</li>
                                <li>Figma to Web page </li>
                            </ul>
                        </div>
                    </div>
                    <div className='exp-item md:border-r border-r-0 md:border-white text-center'>
                        <p className="py-3 text-xl">Jan-2022 - Dec 2022</p>
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
                    <div className='exp-item text-center'>
                        <p className="py-3 text-xl">Jan-2023 - Current</p>
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