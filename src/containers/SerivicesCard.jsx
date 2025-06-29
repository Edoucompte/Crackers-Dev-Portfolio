import React from 'react'

export default function SerivicesCard({ 
    logoRender = ()=>{}, 
    title= "", 
    desciption="",
    link= ""
}) {
  return (
    <div className=' w-[300px] h-[200px] px-3 py-5'> {/* shadow-md shadow-blue-400 rounded-xl*/}
        {/* logo */}
        <p>{logoRender()}</p>
        {/* text */}
        <p className='font-semibold mb-3'>{title}</p>
        <p className=' text-xs'>{desciption}</p>
        <button>
            <a href={link} target="_blank" rel="noopener noreferrer">
                Visiter
            </a>
        </button>
    </div>
  )
}
