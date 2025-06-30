import { IoLogoWhatsapp } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";

export default function Contact() {
  return (
    <section id="contactUs" className=" flex fiexd inset-0 z-1 w-full bg-base-100 text-base-content">
        <div className="w-[90%] mx-auto text-center py-12 text-blue-800 dark:text-white ">
            {/* é à è â */}
            <h3 className='text-xl md:text-3xl font-semibold mb-4 text-blue-800'>
                Prêt pour une aventure digitale execptionnelle ?
            </h3>
            <p className="mb-4 px-4 md:px-18 text-base-content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Tenetur cumque magnam nulla eos distinctio rerum voluptatem voluptatibus, 
                totam vero veritatis tempore voluptas facilis expedita possimus harum odio laborum, 
                a voluptate?
            </p>

            <p className="mb-4">Rejoins nous à l'instant</p>
            <p className="flex justify-center items-center">
                <IoLogoWhatsapp />
                <a href="http://wa.me?to=+33780622899" target="_blank" rel="noopener noreferrer"> 
                    : 00 33 7 80 62 28 99
                </a>
            </p>

            <p className="flex justify-center items-center">
                <IoMailOutline />
                <a href="http://wa.me?to=+33780622899" target="_blank" rel="noopener noreferrer"> 
                    : crackers.dev123@gmail.com
                </a>
            </p>

            <button className="bg-blue-800 text-white mt-3"><a href="mailto:crackers.dev123@gmail.com">Laisse un mail</a></button>
        </div>
    </section>
  )
}
