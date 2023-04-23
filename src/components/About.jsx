import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300' >
      
      <div className='flex flex-col justify-center items-center w-full h-full '>

        <div className='max-w-[900px] w-full  grid grid-cols-2 gap-8'>

          <div className='sm:text-right pb-8 pl-4'>

            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>

          </div>

             <div> </div>

              </div>

                    <div className='max-w-[900px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                      <p> Ciao sono ivan, Mi diverto creando siti web moderni e web app interattive. </p>
                    </div>
                    <div>
                      <p>Mi sono avvicinato a questo mondo per curiosità, volevo capire come funzionassero le applicazioni che utilizziamo tutti i giorni, ho iniziato a studiare cercando informazioni sul web, libri, svolgendo corsi e facendo pratica.<br/>Sono curioso e in continuo aggiornamento, attuamlente studio React.js.   </p>
                    </div>

                    </div>

        </div>

      </div>

   
  );
};

export default About