import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

const Footer = () => {
  return (

    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
    <ul>
    
        <li className='w-[160px] h-[60px] flex justify-between items-center '>
        <a className='flex justify-between items-center w-full text-gray-300'
          href='https://www.linkedin.com/in/ivan-mattei-781239264/'>
            Linkedin <FaLinkedin size={30}/>
          </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center '></li>
        <li className='w-[160px] h-[60px] flex justify-between items-center '></li>
        <li className='w-[160px] h-[60px] flex justify-between items-center '></li>

    </ul>
    </div>
  )
}

export default Footer