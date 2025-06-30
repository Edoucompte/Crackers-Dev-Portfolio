import React from 'react'
import SerivicesCard from './SerivicesCard'
import web from '../assets/desktop-16.png'
import mobile from '../assets/Mobile.png'

export default function Services() {
  const services = [
    {
      title: "Développement Web",
      description: `Création de sites vitrines élégants, de boutiques e-commerce robustes ou d'applications web complexes, toutes optimisées pour la performance, la sécurité et l'expérience utilisateur. Nous utilisons les dernières technologies pour des plateformes scalables et responsives qui évoluent avec votre marque.`,
      link: "Test",
    },
    {
      title: "Développement Mobile",
      description: `Notre service de développement mobile conçoit des applications fluides et performantes pour iOS, Android ou en multiplateforme. Nous gérons votre projet de l'idée à la publication sur les stores, en nous concentrant sur l'expérience utilisateur et l'intégration technologique, pour faire de votre ambition mobile une réalité.`,
      link: "Test",
    },
  ]
  return (
    <section id='services' className='flex fiexd inset-0 z-1 w-full bg-base-100 text-base-content'>
      {/* NOS SERVICES é è à â ê ô*/}
        <div className=' w-[90%] mx-auto text-center py-12 text-blue-800 dark:text-white '>
            <h3 className='text-xl md:text-3xl font-semibold mb-4 text-blue-800 text-shadow-blue-600 text-shadow-xs'>Nos Services </h3>
            <p className="mb-4 px-4 md:px-20 text-xs md:text-[0.98rem] text-left">
              De l'étincelle initiale à un produit numérique tangible, 
              nous sommes votre partenaire dédié pour transformer vos idées en succès concrets. 
              Chez <span className="italic font-semibold text-blue-800"> Crackers Dev</span>, nous vous accompagnons 
              à chaque étape du parcours de votre transformation digitale. 
              Notre processus débute par une analyse approfondie de vos besoins et de vos objectifs, 
              se poursuit par une conception innovante et une phase de développement minutieuse, 
              pour culminer avec le déploiement et l'hébergement sécurisé de votre solution.
              Nous développons des solutions web et des applications mobiles.
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
    </section>
  )
}
