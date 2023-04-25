import React from 'react'
import in_arrivo from '../assets/in_arrivo.jpg'

const Progetti = () => {
  return (
    <div name='progetti' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>

     <div  className='max-w-[900px]  mx-auto p-4 flex flex-col justify-center w-full h-full'>

        <div  className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Progetti</p>
            <p className='py-6 text-gray-300 text-2xl font-bold'>!! Lavori in corso !!</p>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

          <div style={{backgroundImage:`url(${in_arrivo})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                  React Application
              </span>
              <div className='pt-8 text-center'>
              <h3 className='text-gray-300 text-2xl font-bold'>!! Presto in arrivo !!</h3>

              {/* <a href='/' > 
              <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
               </a>
               <a href='/' > 
              <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Codice</button>
               </a> */}

              </div>
            </div>
          </div>

          <div style={{backgroundImage:`url(${in_arrivo})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                  React Application
              </span>
              <div className='pt-8 text-center'>
              <h3  className='text-gray-300 text-2xl font-bold'>!! Presto in arrivo !!</h3>

              {/* <a href='/' > 
              <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
               </a>
               <a href='/' > 
              <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Codice</button>
               </a> */}

              </div>
            </div>
          </div>

          <div style={{backgroundImage:`url(${in_arrivo})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                  React Application
              </span>
              <div className='pt-8 text-center'>
              <h3  className='text-gray-300 text-2xl font-bold'>!! Presto in arrivo !!</h3>
{/* 
              <a href='/' > 
              <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
               </a>
               <a href='/' > 
              <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Codice</button>
               </a> */}

              </div>
            </div>
          </div>

          <div style={{backgroundImage:`url(${in_arrivo})`}}  className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                  React Application
              </span>
              <div className='pt-8 text-center'>
              <h3  className='text-gray-300 text-2xl font-bold'>!! Presto in arrivo !!</h3>

              {/* <a href='/' > 
              <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
               </a>
               <a href='/' > 
              <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Codice</button>
               </a> */}

              </div>
            </div>
          </div>

        </div>

     </div>
     </div>



    </div>
  )
}

export default Progetti