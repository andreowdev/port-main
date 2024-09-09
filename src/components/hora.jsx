import React from 'react';
import horaBg from "./img/bg/hora.jpg";

export default function Hora() {

    const hora = new Date().getHours().toString().padStart(2, "0")
    const minutos = new Date().getMinutes().toString().padStart(2, "0");
    
    console.log(hora)
    return (
        <>
            <div className='relative ml-4 flex items-center justify-center'>
            <img src={horaBg} alt="Hora" className='w-24 object-cover rounded-md'/>
            <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center text-center text-white font-bold'>
                {hora}:{minutos} <br></br> in Brazil
            </div>
        </div>
        </>
    );             
}
