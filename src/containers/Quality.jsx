import QualityCard from "./QualityCard"

export default function Quality() {
  const qualities = [
    { 
        title : "L'Approche Collaborative",
        description : 'Nous fonctionnons comme un véritable partenaire, intégrant le client dans le processus de développement et de prise de décision.',
    },
    { 
        title : 'La Fiabilité des Solutions',
        description : 'Nos produits  sont stables, performants et répondent aux attentes fonctionnelles du client sur le long terme.',
    },
    { 
        title : "L'Innovation", 
        description : 'Nous proposons des solutions créatives et intégrons des technologies adéquates pour résoudre des problèmes complexes.',
    },
    { 
        title : "La Responsivité", 
        description : "Dans un monde beaucoup plus centré-mobile, nous adaptons les vues de votre plateforme à la taille de l'écran pour le confort du client",
    }
  ]
  return (
    <div >
        {/* Nos QUALITES é è à â ê ô*/}

        <div className='flex fiexd inset-0 z-1 w-full bg-base-100 text-base-content'>
            <div className=' w-[90%] mx-auto text-center py-12 text-blue-800 dark:text-white '>
                <h3 className='text-xl md:text-3xl font-semibold mb-4 text-blue-800'>Choisir Crackers Dev pour votre parcours digital </h3>
                <p className="mb-2 px-4 md:px-20 text-xs md:text-[0.98rem] ">
                    C'est collaborer avec une équipe performante de développeurs qui le sens des valeurs et du travail bien fait. Vous bénéficiez de :
                </p>
                <div className="flex flex-row flex-wrap gap-4 md:gap-12 p-4 items-center justify-center">
                    {
                        qualities.map( (qual, index) => {
                            return(
                                <QualityCard key={index} title={qual.title} desciption={qual.description}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}
