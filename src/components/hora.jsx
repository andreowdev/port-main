import React from 'react';
import horaBg from "./img/bg/hora.jpg";

export default function Hora() {
    const hora = new Date().getHours().toString().padStart(2, "0");
    const minutos = new Date().getMinutes().toString().padStart(2, "0");

    return (
        <div className='relative flex items-start justify-start w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 mb-4 '>
            <img src={horaBg} alt="Hora" className='w-full h-full object-cover rounded-md' />
            <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center text-center text-white font-bold  ounded-md'>
                {hora}:{minutos} <br /> in Manaus - AM Brazil
            </div>
        </div>
    );
}
