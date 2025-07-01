import { IoLogoWhatsapp } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";

export default function Contact() {
  return (
    <section id="contactUs" className=" flex fiexd inset-0 z-1 w-full bg-base-100 text-base-content">
        <div className="w-[90%] mx-auto text-center px-4 sm:px-8 md:px-22 py-12 text-blue-800 dark:text-white ">
            {/* é à è â */}
            <h3 className='text-xl md:text-3xl font-semibold mb-4 text-blue-800'>
                Prêt pour une aventure digitale execptionnelle ?
            </h3>
            <p className="mb-4 px-4 md:px-18 text-base-content text-justify">
                Notre code accompagne votre vison. Nous donnons vie à vos projets les plus ambitieux 
                avec des expériences numériques captivantes. <br />
                Que vous disposiez déjà d'un <strong>design Figma précis</strong>, 
                d'un <strong>plan de conception détaillé</strong>, d'un <strong>code existant</strong> à maintenir, 
                ou que vous ayez simplement <strong>une idée</strong> encore à l'état de brouillon, 
                nous avons l'expertise et la solution adaptée à votre besoin digital.
            </p>

            <p className="mb-4">Joignez nous à l'instant !</p>
            <p className="flex justify-center items-center">
                <IoLogoWhatsapp className="mr-2"/>
                <a href="http://wa.me/+33780622888/" target="_blank" rel="noopener noreferrer"> 
                    : 00 33 7 80 62 28 88
                </a>
            </p>

            <p className="flex justify-center items-center">
                <IoMailOutline className="mr-2"/>
                <span> 
                    : crackers.dev123@gmail.com
                </span>
            </p>

            <button className="bg-blue-800 text-white mt-3"><a href="mailto:crackers.dev123@gmail.com">Laisse un mail</a></button>
        </div>
    </section>
  )
}
