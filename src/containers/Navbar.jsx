export default function MyNavbar() {
  return (
    <header>
        <nav className='px-3'>
            <div className="navbar shadow-sm text-white">
                {/*  Bouton-menu avec dropDown ou titre selon la taille */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 text-base-content rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a href="#landing">Accueil</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#projects">Projets</a></li>
                            <li><a href="#contactUs">A propos</a></li>
                            <li><a href="#contactUs">Nous contacter</a></li>
                            {/* <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li> */}
                        </ul>
                    </div>
                    <a href="#"><h2 className="cursor-pointer text-xl sm:text-3xl text-blue-800 font-bold">Crackers Dev</h2></a>
                </div>
                {/*  Menu meme */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><h2 className="font-inherit"><a href="#landing">Accueil</a></h2></li>
                        <li><a href="#services">Services</a></li>
                        {/* <li>
                            <details>
                                <summary>Parent</summary>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li> */}
                        <li><a href="#projects">Projets</a></li>
                        <li><a href="#contactUs">A propos</a></li>
                        <li><a href="#contactUs">Nous contacter</a></li>
                    </ul>
                </div>

                {/*  Bouton d'action à é è â ô ê */}
                <div className="navbar-end">
                    <button className="bg-blue-800 text-white">
                        <a href="#contactUs" className="text-xs md:text-[1.03rem]">Commencer</a>
                    </button>
                </div>
            </div>
        </nav>
    </header>
  )
}
