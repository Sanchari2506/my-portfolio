import React from 'react'
import Image from '../assets/Group 5.png'

const Skill = () => {
    const skills = [
        {
            title: 'HTML',
            amount: '90%'
        },
        {
            title: 'CSS',
            amount: '90%'
        },
        {
            title: 'Javascript',
            amount: '80%'
        },
        {
            title: 'Database(SQL)',
            amount: '60%'
        },
        {
            title: 'Database(MongoDB)',
            amount: '40%'
        },
        {
            title: 'React.js',
            amount: '50%'
        },
        {
            title: 'Node.js',
            amount: '50%'
        },
        {
            title: 'Next.js',
            amount: '30%'
        },
        {
            title: 'Shopify',
            amount: '90%'
        }
    ]
    return (
        <div className='skill-section-container md:py-10 md:px-12 bg-[#3C4354]'>
            <div className='px-8 skill-wrapper md:w-[1092px] block md:flex md:justify-between md:items-center m-auto gap-x-20'>
                <div className='wrapper-one md:w-3/5 w-full mb-8 md:mb-0'>
                    <h2 className='skill-heading md:text-4xl font-bold text-3xl'>
                        <span>My</span>
                        <span style={{ color: '#EAB308' }}> Skills</span>
                    </h2>
                    <div className='s-wrap'>
                        {
                            skills.map((item, index) => {
                                return (
                                    <div key={index} className='skill-item mt-3'>
                                        <div className='skill-item-content flex justify-between items-center'>
                                            <p className='text-xl text-[#EAB308]'>{item.title}</p>
                                            <p className='text-xl text-[#EAB308]'>{item.amount}</p>
                                        </div>
                                        <div className='skill-progress-wrap rounded-lg bg-[#D9D9D9] w-full h-[20px]'>
                                            <div className='skill-fill bg-[#EAB308] rounded-lg' style={{width:item.amount,height:'20px'}}></div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='wrapper-two md:w-2/5 w-full m-auto'>
                    <img src={Image} alt='image' loading='lazy' style={{ width: '100%', height: 'auto' }} />
                </div>
            </div>
        </div>
    )
}

export default Skill