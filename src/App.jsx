import Landing from './containers/Landing'
import './App.css'
import Quality from './containers/Quality'
import Services from './containers/Services'
import Projects from './containers/Projects'
import Contact from './containers/Contact'
import Footer from './containers/Footer'

function App() {

  return (
    <>
      <main>
        <Landing />
        <Quality />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />

      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      
    </>
  )
}

export default App
