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
          title: "Location de Véhicule",
          description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias vitae illum at non iure quam sunt illo ipsam facilis cum eligendi nobis odit quos nesciunt, explicabo voluptate possimus earum pariatur`,
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
            description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias vitae illum at non iure quam sunt illo ipsam facilis cum eligendi nobis odit quos nesciunt, explicabo voluptate possimus earum pariatur`,
            link: "https://koaching.vercel.app/",
            cover: conference,
            littleImg: conferenceLittle
          },
          {
            title: "Imprimerie",
            description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias vitae illum at non iure quam sunt illo ipsam facilis cum eligendi nobis odit quos nesciunt, explicabo voluptate possimus earum pariatur`,
            link: "https://guadeloupe-banderole-website.vercel.app/",
            cover: printer,
            littleImg: printerLittle
          },
          {
            title: "Stylisme et Couture",
            description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias vitae illum at non iure quam sunt illo ipsam facilis cum eligendi nobis odit quos nesciunt, explicabo voluptate possimus earum pariatur`,
            link: "https://texma.fr/",
            cover: couture,
            littleImg: coutureLittle
          },
          {
            title: "Gestion de Stock",
            description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias vitae illum at non iure quam sunt illo ipsam facilis cum eligendi nobis odit quos nesciunt, explicabo voluptate possimus earum pariatur`,
            link: "https://test-indus-wizeco-backoffice.vercel.app/",
            cover: magasin,
            littleImg: magasinLittle
          },
      ]
      return (
        <section id='projects' className='flex fiexd inset-0 z-1 w-full bg-base-100 text-base-content'>
          {/* NOS SERVICES é è à â ê ô*/}
            <div className='w-full sm:w-[90%] mx-auto text-center py-12 text-blue-800 dark:text-white '>
                <h3 className='text-xl md:text-3xl font-semibold mb-4 text-blue-800'>Nos Projets </h3>
                <p className="mb-4 px-4 md:px-20 text-xs md:text-[0.98rem] ">
                    Nous comptons quelques plateformes à notre active. Nous vous les présentons pour vous donner
                    un aperçu de nos travaux. Vous pouvez pour mieux les admirer en les visiant sur le web. 
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
