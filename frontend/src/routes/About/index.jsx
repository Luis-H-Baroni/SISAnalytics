import React from 'react';

function About () {
  return (
    <div>
      <div className='flex flex-1 justify-start items-center flex-col gap-6'>
        <h5 className='font-bold text-4xl text-dark-purple'>SisAnalytics</h5>
        <p className='text-2x-l uppercase font-light'>Sistema de análise de dados</p>
        <p className='w-3/5 text-center text-2xl'>
          Utilizando capturas de dados de dispositivos IoT, desenvolvemos um sistema capaz de auxiliar pró-ativamente na tomada de decisões.
        </p>
      </div>
      <div className='flex justify-center items-center gap-6 mt-16'>
        <img className='w-1/4 shadow-lg hover:shadow-2xl'
          src="https://cdn.pixabay.com/photo/2016/10/09/08/32/digital-marketing-1725340_1280.jpg" 
          alt="about"
        />
        <img className='w-1/4 shadow-lg hover:shadow-2xl'
          src='https://cdn.pixabay.com/photo/2016/11/18/21/37/laptop-1836990_1280.jpg'
          alt='computador'
        />
        <img className='w-1/4 shadow-lg hover:shadow-2xl'
          src='https://cdn.pixabay.com/photo/2016/03/26/13/09/cup-of-coffee-1280537_1280.jpg'
          alt='cafe'
        />
      </div>
      <div className='flex justify-center mt-16'>
        <p className='font-extralight'>Desenvolvido com <span className='text-red-700'> &#x2764; </span>
          pelos alunos de  
            <a
              className='text-blue-500'
              href='https://www.unoesc.edu.br/cursos/curso/sistemas-de-informacao/'
              target='_blank'
              rel="noreferrer"
            >
              <span> Sistema de Informação </span>
            </a>
           da UNOESC - Chapecó.
        </p>
        <br />      
      </div>
    </div>
  );
}

export default About;