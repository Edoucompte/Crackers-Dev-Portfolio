import React from 'react'
import SerivicesCard from './SerivicesCard'

export default function Services() {
  const projects = [
    {
      title: "Test",
      description: "Test",
      link: "Test",
    }
  ]
  return (
    <div className='flex fiexd inset-0 z-1 w-full bg-base-100 text-base-content'>
      {/* NOS SERVICES é è à â ê ô*/}
            <div className=' w-[90%] mx-auto text-center py-12 text-blue-800 dark:text-white '>
                <h3 className='text-xl md:text-3xl font-semibold mb-4 text-blue-800'>Nos Services </h3>
                <p className="mb-2 px-4 md:px-20 text-xs md:text-[0.98rem] ">
                    Nous développons les produits digitaux suivants :
                </p>
                <div className="flex flex-row flex-wrap gap-4 md:gap-12 p-4 items-center justify-center">
                    {
                        projects.map( (proj, index) => {
                            return(
                              <SerivicesCard key={index} title={proj.title} 
                                desciption={proj.description} link={proj.link}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
  )
}
