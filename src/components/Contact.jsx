import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

const Contact = () => {
  return (
    <>
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 '>

        <form method='POST' action='https://getform.io/f/fcf7c749-9fd0-4802-b1e1-f5da08353bbc' className='flex flex-col max-w-[300px] max-h-[450px] h-full'>
            <div className='pb-6'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contatto</p>
                <p className='text-gray-300 py-4'>" Invia il messaggio per contattarmi "</p>
            </div>
            <input className='bg-[#ccd5f6] p-2' type='text' placeholder='Nome' name='nome'/>
            <input className='my-4 p-2 bg-[#ccd5f6]' type='email' placeholder='Email' name='email'/>
            <textarea className='bg-[#ccd5f6] p-2 max-h-[250px]'  name='messaggio' rows={6} placeholder='Messaggio' />
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Invia</button>
        </form>


        

    
        </div>

 
        

          </>

    

    
  )
}

export default Contact