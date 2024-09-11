import React from 'react';
import horaBg from "./img/bg/hora.jpg";

export default function Hora() {
    const hora = new Date().getHours().toString().padStart(2, "0");
    const minutos = new Date().getMinutes().toString().padStart(2, "0");

    return (
        <div className='relative  flex items-center justify-center'>
            <img src={horaBg} alt="Hora" className='w-24 h-24 object-cover rounded-md' />
            <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center text-center text-white font-bold'>
                {hora}:{minutos} <br /> in Brazil
            </div>
        </div>
    );
}
