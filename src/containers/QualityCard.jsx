import React from 'react'

export default function QualityCard({
  title= "", desciption="",
  children
}) {
  return (
    <div className=' w-[300px] h-[200px] px-3 py-5'> {/* shadow-md shadow-blue-400 rounded-xl*/}
        {/* logo */}
        <div className='flex'>
          {children}
        </div>
        {/* text */}
        <p className='font-semibold mb-3'>{title}</p>
        <p className=' text-xs'>{desciption}</p>
    </div>
  )
}
