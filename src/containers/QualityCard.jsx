import React from 'react'

export default function QualityCard({
  title= "", desciption="",
  children
}) {
  return (
    <div className=' w-[300px] px-3 py-5 bg-gray-100 dark:bg-gray-900 rounded-[0.5rem]'> {/* shadow-md shadow-blue-400 rounded-xl*/}
        {/* logo */}
        <div className='flex mb-3'>
          {children}
        </div>
        {/* text */}
        <div className="px-2 py-7">
          <p className='font-semibold mb-3'><strong>{title}</strong></p>
          <p className=' text-xs'>{desciption}</p>
        </div>
    </div>
  )
}
