import React from 'react'

export default function ProjectCard({ 
    title= "", 
    desciption="",
    link= "",
    cover,
    littleImg
}) {
  return (
    <div className=' w-[75%] bg-gray-100 dark:bg-gray-900 rounded-xl'> {/* shadow-md shadow-blue-400 rounded-xl*/}
        {/* IMAGES */}
        <div className='relative inset-0'>
          <div className=" h-40 sm:h-60 lg:h-90 overflow-hidden rounded-xl">
            <img src={cover} alt={title} className='w-full h-full' />
          </div>
          <div className={" hidden md:absolute bottom-2 left-2 md:block w-15 h-20 overflow-hidden " + 
            " border-2 border-blue-800 rounded-xl"}
          >
            <img src={littleImg} alt={title} className='w-full h-full' />
          </div>
        </div>
        {/* text */}
        <div className='px-3 py-5'>
          <p className='font-semibold mb-3 text-2xl'>{title}</p>
          <p className=' text-xs text-black dark:text-white'>{desciption}</p>
        </div>
        <button className='bg-blue-800 mb-4'>
            <a href={link} target="_blank" rel="noopener noreferrer">
                Visiter
            </a>
        </button>
    </div>
  )
}
