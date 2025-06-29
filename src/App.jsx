import Landing from './containers/Landing'
import './App.css'
import Quality from './containers/Quality'
import Projects from './containers/Projects'

function App() {

  return (
    <>
      <main>
        <Landing />
        <Quality />
        <Projects />
      </main>

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
