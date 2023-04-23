import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi';
import StrDev from './StrDev';
import { Link } from 'react-scroll'
// import Typed from 'react-typed';
// import Typed from "typed.js";
// import { useEffect, useRef } from "react";







  

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

{/* ############ CONTAINER ######## */}

    <div className='max-w-[900px] mx-auto px-8 flex flex-col justify-center h-full '>
    
    <p className='text-pink-600'>Ciao, sono</p>
    <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Ivan Mattei</h1>
    <h2  className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>  <StrDev/> Web Developer  </h2>
    <div>
   
    
    {/* <h1 Typed strings = "Developer" typeSpeed={120} backSpeed={140} loop ></h1> */}
    <p className='text-[#8892b0] py-4 max-w-[700px]'> „[…] Ritardo ce ne sarà per forza, a causa di intoppi praticamente inevitabili, perché fino a un certo punto è meglio lasciare che ci siano intoppi piuttosto che spendere tempo sul progetto per essere sicuri che non ce ne siano (chissà quanti anni occorrerebbero per questa strada).“ —  Alan Turing </p>

    <div>
      <button   className='  text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
      <Link  to="progetti"  smooth={true}  duration={500} >
             Vedi Lavori
      </Link>
      <span className='group-hover:rotate-90 duration-300'>
      <HiArrowNarrowRight className='ml-3'/>
      
      </span>
      
      </button>
    </div>

    </div>





    </div>
    </div>
    
  )
}

export default Home