import React from 'react'

export default function SerivicesCard({ 
    title= "", 
    desciption="",
    children
}) {
  return (
    <div className=' w-[300px] bg-gray-100 dark:bg-gray-900 rounded-[0.5rem]'> {/* shadow-md shadow-blue-400 rounded-xl*/}
        {/* logo */}
        <div className="flex bg-gray-700 h-30 overflow-hidden">
          <div className="m-auto border-blue-400 border-1 rounded-full p-8">
            <div className="m-auto border-blue-400 border-1 rounded-full p-6">
            <div className="m-auto border-blue-400 border-1 rounded-full p-3">
                {children}
              </div>
            </div>
          </div>
        </div>
        {/* text */}
        <div className='p-5'>
          <p className='font-semibold mb-3'>{title}</p>
          <p className=' text-xs text-left'>{desciption}</p>
        </div>
        {/* <button>
            <a href={link} target="_blank" rel="noopener noreferrer">
                Visiter
            </a>
        </button> */}
    </div>
  )
}
