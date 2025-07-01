import React from 'react'

export default function Footer() {
  return (
    <footer className="flex flex-col sm:flex-row flex-wrap gap-7 justify-around items-center bg-base-200 text-base-content rounded p-10">
        <p>Copyright &copy; Crackers Dev</p>
        <div className=' flex flex-col sm:flex-row gap-4 '>
            <p><a href="#servies">Services</a></p>
            <p><a href="#projects">Projets</a></p>
            <p><a href="#contactUs">Contact</a></p>
        </div>

        <button className='bg-blue-800'><a href="#landing text-white">Remonter</a></button>
    </footer>
  )
}
