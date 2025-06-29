import React from 'react'
import SerivicesCard from './SerivicesCard'
import web from '../assets/desktop-16.png'
import mobile from '../assets/Mobile.png'

export default function Services() {
  const services = [
    {
      title: "Développement Web",
      description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias vitae illum at non iure quam sunt illo ipsam facilis cum eligendi nobis odit quos nesciunt, explicabo voluptate possimus earum pariatur`,
      link: "Test",
    },
    {
      title: "Développement Mobile",
      description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias vitae illum at non iure quam sunt illo ipsam facilis cum eligendi nobis odit quos nesciunt, explicabo voluptate possimus earum pariatur`,
      link: "Test",
    },
  ]
  return (
    <div className='flex fiexd inset-0 z-1 w-full bg-base-100 text-base-content'>
      {/* NOS SERVICES é è à â ê ô*/}
            <div className=' w-[90%] mx-auto text-center py-12 text-blue-800 dark:text-white '>
                <h3 className='text-xl md:text-3xl font-semibold mb-4 text-blue-800'>Nos Services </h3>
                <p className="mb-4 px-4 md:px-20 text-xs md:text-[0.98rem] ">
                    Nous développons les produits digitaux suivants :
                </p>
                <div className="flex flex-row flex-wrap gap-6 md:gap-18 p-4 items-center justify-center">
                    {/* Collab é è à â ê ô */}
                    <SerivicesCard title={services[0].title} desciption={services[0].description}>
                      <div className="m-auto flex items-center justify-center h-12 w-12  rounded-full text-white">
                        <img src={web} alt="Mobile" className='h-6' />
                      </div>
                    </ SerivicesCard>

                    {/* fiabilité é è à â ê ô */}
                    <SerivicesCard title={services[1].title} desciption={services[1].description}>
                      <div className="m-auto flex items-center justify-center h-12 w-12 rounded-full text-white p-[1.02rem] ">
                          <img src={mobile} alt="Mobile" />
                      </div>
                    </ SerivicesCard>
                </div>
            </div>
        </div>
  )
}
