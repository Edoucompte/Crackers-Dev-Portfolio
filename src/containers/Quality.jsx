import QualityCard from "./QualityCard"
import stroke from '../assets/Stroke.png'
import mobile from '../assets/Mobile.png'
import landing from '../assets/Abstract_Design.png'
import { FaLightbulb } from "react-icons/fa";
import { TbHeartHandshake } from "react-icons/tb";

export default function Quality() {
  const qualities = [
    { 
        title : "L'Approche Collaborative",
        description : 'Nous fonctionnons comme un véritable partenaire, intégrant le client dans le processus de développement et de prise de décision.'
    },
    { 
        title : 'La Fiabilité des Solutions',
        description : 'Nos produits  sont stables, performants et répondent aux attentes fonctionnelles du client sur le long terme.'
    },
    { 
        title : "L'Innovation", 
        description : 'Nous proposons des solutions créatives et intégrons des technologies adéquates pour résoudre des problèmes complexes.',
    },
    { 
        title : "La Responsivité", 
        description : "Dans un monde beaucoup plus centré-mobile, nous adaptons les vues de votre plateforme à la taille de l'écran pour le confort du client"
    }
  ]

  const iconContainerStyle = {
    backgroundImage: `url(${landing})`
  }

  return (
    <div >
        {/* Nos QUALITES */}

        <div className='flex fiexd inset-0 z-1 w-full bg-base-100 text-base-content'>
            <div className=' w-[90%] mx-auto text-center py-12 text-blue-800 dark:text-white '>
                <h3 className='text-xl md:text-3xl font-semibold mb-4 text-blue-800'>Choisir Crackers Dev pour votre parcours digital </h3>
                <p className="mb-2 px-4 md:px-20 text-xs md:text-[0.98rem] ">
                    C'est collaborer avec une équipe performante de développeurs qui le sens des valeurs et du travail bien fait. Vous bénéficiez de :
                </p>
                <div className="flex flex-row flex-wrap gap-4 md:gap-12 p-4 items-center justify-center">
                    {/* Collab é è à â ê ô */}
                    <QualityCard title={qualities[0].title} desciption={qualities[0].description}>
                        <div className="mx-auto flex items-center justify-center h-12 w-12 bg-black rounded-full text-white">
                            <TbHeartHandshake size={30}/>
                        </div>
                    </ QualityCard>

                    {/* fiabilité é è à â ê ô */}
                    <QualityCard title={qualities[1].title} desciption={qualities[1].description}>
                        <div className="mx-auto flex items-center justify-center h-12 w-12 bg-black rounded-full text-white p-3.5">
                            <img src={stroke} alt="fiabilité" />
                        </div>
                    </ QualityCard>

                    {/* INNOVATION é è à â ê ô */}
                    <QualityCard title={qualities[2].title} desciption={qualities[2].description}>
                        <div className="mx-auto flex items-center justify-center h-12 w-12 bg-black rounded-full text-white p-3.5">
                            <FaLightbulb size={23}/>
                        </div>
                    </ QualityCard>

                    {/* Responsivité é è à â ê ô */}
                    <QualityCard title={qualities[3].title} desciption={qualities[3].description}>
                        <div className="mx-auto flex items-center justify-center h-12 w-12 bg-black rounded-full text-white p-[1.02rem]">
                        <img src={mobile} alt="Responsivité" />
                        </div>
                    </ QualityCard>
                </div>
            </div>
        </div>
    </div>
  )
}
