import React from 'react'
import ProjectCard from './ProjectCard'
import voiture from '../assets/projects/ciryz_landing.png'
import voitureLittle from '../assets/projects/ciryz_categorie.png'
import graphik from '../assets/projects/Graphisme_site.png'
import graphikLittle from '../assets/projects/Graphisme_vue.png'
import conference from '../assets/projects/site_formations.png'
import conferenceLittle from '../assets/projects/formation_leadership.png'
import printer from '../assets/projects/Impression_sites.png'
import printerLittle from '../assets/projects/Impressions_kakemono.png'
import couture from '../assets/projects/uniforme_site.png'
import coutureLittle from '../assets/projects/uniforme.png'
import magasin from '../assets/projects/magasin_sites.png'
import magasinLittle from '../assets/projects/magasin_1.png'

export default function Projects() {
    const projects = [
      {
        title: "Promotion de Service",
        description: `Wizeco révolutionne le secteur de la promotion avec une solution basée sur l'intelligence artificielle. La plateforme permet de générer des promotions instantanées, vous offrant la flexibilité nécessaire pour répondre à vos besoins commerciaux.`,
        link: "https://test-indus-wizeco-backoffice.vercel.app/",
        cover: magasin,
        littleImg: magasinLittle
      },
      {
        title: "Location de Véhicule",
        description: `Bienvenue chez CIRYZ Coated, votre partenaire de confiance pour la location de véhicules en Guadeloupe. Que vous ayez besoin d'une voiture pour une journée, une semaine ou plusieurs mois, nous offrons des solutions flexibles adaptées à vos besoins.`,
        link: "https://www.ciryzcoated.com/",
        cover: voiture,
        littleImg: voitureLittle
      },
      {
        title: "Agence de Graphisme",
        description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias vitae illum at non iure quam sunt illo ipsam facilis cum eligendi nobis odit quos nesciunt, explicabo voluptate possimus earum pariatur`,
        link: "https://www.graphikland-website.vercel.app/",
        cover: graphik,
        littleImg: graphikLittle
      },
      {
          title: "Conférence et Formation",
          description: `Chez Koachin.GP-M, nous croyons au pouvoir de l'apprentissage continu et au développement personnel. Notre mission est d'accompagner les professionnels à atteindre leurs objectifs grâce à des formations de qualité et des ateliers intéractifs animés par des experts du secteur.`,
          link: "https://koaching.vercel.app/",
          cover: conference,
          littleImg: conferenceLittle
        },
        {
          title: "Imprimerie",
          description: `Chez Guadeloupe Banderole, nous sommes passionnés par la communication visuelle et l'impact qu'elle peut avoir sur les entreprises et les événements. Notre objectif est de vous fournir des solutions de banderoles personnalisées de qualité supérieure, conçues pour vous aider à vous démarquer de la concurrence et à faire passer votre message de manière percutante`,
          link: "https://guadeloupe-banderole-website.vercel.app/",
          cover: printer,
          littleImg: printerLittle
        },
        {
          title: "Stylisme et Couture",
          description: `Découvrez Texma, une marque innovante créée par la société IPCM. Nous œuvrons dans les domaines de l'impression, de la publicité, de la communication et du digital depuis plus de dix ans. Texma vous offre une plateforme accessible toute l'année pour faciliter l'achat et la livraison à domicile d'uniformes scolaires.`,
          link: "https://texma.fr/",
          cover: couture,
          littleImg: coutureLittle
        },
      ]
      return (
        <section id='projects' className='flex fiexd inset-0 z-1 w-full bg-base-100 text-base-content'>
          {/* NOS SERVICES é è à â ê ô*/}
            <div className='w-full sm:w-[90%] mx-auto text-center py-12 text-blue-800 dark:text-white '>
                <h3 className='text-xl md:text-3xl font-semibold mb-4 text-blue-800 text-shadow-blue-600 text-shadow-xs'>
                  Nos Projets 
                </h3>
                <p className="mb-4 px-4 md:px-20 text-xs md:text-[0.98rem] text-left">
                  Découvrez la concrétisation de nos expertises à travers une sélection de nos réalisations. 
                  Elle témoigne de notre capacité à innover et à s'adapter, 
                  présentant une riche <strong>variété de projets</strong> aux <strong>thèmes diversifiés</strong> et aux fonctionnalités 
                  <strong> uniques</strong>. De plateformes vitrines élégantes aux tableaux de bord intuitifs, 
                  en passant par des outils métiers sur mesure, chaque projet illustre notre engagement 
                  à transformer des idées complexes en solutions digitales performantes et esthétiques, 
                  répondant précisément aux défis de nos clients.
                </p>
                <div className="flex flex-col gap-6 md:gap-18 p-0 sm:p-4 items-center justify-center">
                    {
                        projects.map( (project, index)=> {
                            return (
                                <ProjectCard key={index} title={project.title} 
                                    desciption={project.description}
                                    link={project.link}
                                    cover={project.cover}
                                    littleImg={project.littleImg}
                    />
                            )
                        })
                    }
                    
                </div>
            </div>
        </section>
    )
}
