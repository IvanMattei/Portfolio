import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import bootstrap from '../assets/bootstrap.png'
import tailwind from '../assets/tailwind.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'

const Skills = () => {
  return (
    <div name='skills' className=' w-full h-screen bg-[#0a192f] text-gray-300'>

    {/* CONTAINER */}


        <div className='max-w-[900px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

          <div>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600  '>Skills/</p>
            <p className='py-4'>// Queste sono le tecnologie che ho utilizzato.</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={html} alt='html icon' />
              <p className='my-4'>HTML</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={css} alt='css icon' />
              <p className='my-4'>CSS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={bootstrap} alt='bootstrap icon' />
              <p className='my-4'>BOOTSTRAP</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={tailwind} alt='tailwind icon' />
              <p className='my-4'>TAILWIND</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={javascript} alt='javascript icon' />
              <p className='my-4'>JAVASCRIPT</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={react} alt='react icon' />
              <p className='my-4'>REACT</p>
            </div>


           
          </div>
        </div>
    </div>
  );
};

export default Skills