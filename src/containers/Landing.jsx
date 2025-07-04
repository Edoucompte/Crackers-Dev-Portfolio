import MyNavbar from './Navbar'
import landing from "../assets/landing4.jpg"

export default function Landing() {
  return (
    <div id='landing'>
        {/* back ground with picture */}
        <div className='relative inset-0 z-0 w-full h-[100vh] bg-cover bg-center text-white'
            style={{ backgroundImage: `url(${landing})` }}
        >
            {/* Overlay pour assombrir l'image */}
            <div className="absolute inset-0 bg-black opacity-60 "></div>

            <div className='relative inset-0 z-1 '>
                <MyNavbar />

                <div className="flex flex-row flex-wrap-reverse justify-around items-center w-full h-[calc(100vh-50px)]">
                    {/* About text */}
                    <div className='z-2 md:w-[45%] px-10 md:px-4 lg:px-10 text-left flex'>
                        <div className="m-auto">
                            <h3 className='text-2xl md:text-3xl font-semibold landing-title'>
                                Bienvenu dans l'Univers Digital 
                            </h3>
                            <p className='my-3 text-xs md:text-[1rem]'>
                                L'agence partenaire pour le développement web et mobile sur mesure 
                                qui propulse votre entreprise. 
                            </p>
                            <p className="italic ">
                                Votre vision devient digitale chez
                                <span className="italic font-semibold"> <strong>Crackers Dev</strong>.</span>
                            </p>
                            <div className='flex gap-5 mt-5'>
                                <button className=" bg-blue-800 text-white ">
                                    <a href="#quality" className='text-xs md:text-xl '>Découvrir</a>
                                </button>
                                <button className="bg-green-800 text-white hover:border-green-300">
                                    <a href="#contactUs" className=' text-xs md:text-xl'>Se lancer</a>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Code tag */}
                    <div className=" items-center justify-center ">
                        <p className=" m-auto text-9xl font-bold"><code>&lt;/&gt;</code></p>
                    </div>
                </div>
            </div>
        </div> 
        
    </div>
  )
}
