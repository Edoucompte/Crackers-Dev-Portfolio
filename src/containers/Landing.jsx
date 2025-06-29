import MyNavbar from './Navbar'
import landing from "../assets/landing4.jpg"

export default function Landing() {
  return (
    <div >
        {/* back ground with picture */}
        <div className='relative inset-0 z-0 w-full h-[100vh] bg-cover bg-center text-white'
            style={{ backgroundImage: `url(${landing})` }}
        >
            {/* Overlay pour assombrir l'image */}
            <div className="absolute inset-0 bg-black opacity-60 "></div>

            <div className='relative inset-0 z-1 '>
                <MyNavbar />

                <div className="flex justify-around items-center w-full h-[calc(100vh-50px)]">
                    {/* Landing text */}
                    <div className='z-2 md:w-[45%] px-10 md:px-4 lg:px-10 text-left flex'>
                        <div className="m-auto">
                            <h3 className='text-2xl md:text-3xl font-semibold'>
                                Bienvenu dans l'Univers Digital 
                            </h3>
                            <p className='my-3 text-justify text-xs md:text-[1rem] lg:text-xl'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Debitis molestiae facere consequuntur ex laudantium sit
                                dolorem eveniet laboriosam in perferendis ab dolor, 
                                hic alias repellendus ea aut totam consequatur chez
                                <span className="italic font-semibold"> Crackers Dev.</span>
                            </p>
                            <div className='flex gap-5 mt-5'>
                                <button className=" bg-blue-800 text-white ">
                                    <a href="#projets" className='text-xs md:text-xl '>Plus d'infos</a>
                                </button>
                                <button className="bg-blue-800 text-white">
                                    <a href="#contactUs" className=' text-xs sm:text-xl'>Contacter</a>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Code tag */}
                    <div className=" items-center justify-center hidden md:flex">
                        <p className=" m-auto text-9xl font-bold"><code>&lt;/&gt;</code></p>
                    </div>
                </div>
            </div>
        </div> 
        
    </div>
  )
}
