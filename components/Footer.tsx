import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaPaperPlane } from 'react-icons/fa6'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className='w-full pb-10 mb-[100px] md:mb-5' id="contact">

        <div className='flex flex-col items-center'>
            <h1 className='heading lg:max-w-[45vw]'>
                Ready to take <span className='text-purple'>your</span> digital presence to the next level?
            </h1>

         

            <a href='mailto:atyubahmad123@gmail.com'>
                <MagicButton 
                    title="Let's get in touch"
                    icon={<FaPaperPlane />}
                    position='right'
                />
            </a>
        </div>

        <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>

            <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2025 Atyub Ahmad</p>

            <div className='flex items-center md:gap-3 gap-6'>
                {socialMedia.map((profile) => (
                    <a 
                        key={profile.id} 
                        href={profile.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'
                        >
                        <img src={profile.img} alt={`Link to ${profile.id}`} width={20} height={20} />
                    </a>
                ))}
            </div>


        </div>

    </footer>
  )
}

export default Footer