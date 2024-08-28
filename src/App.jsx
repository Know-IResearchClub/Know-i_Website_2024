
import styles from './App.module.css'
import PartcilesComponent from './components/particles/particle'

import { Events } from './components/Events/Events'
import { About } from './components/About/About'
import { Footer } from './components/Footer/footer'
import { Navbar } from './components/Navbar/Navbar'

function App() {

  return (
    <>
      <div className={styles.App}>
      <PartcilesComponent/>
        <Navbar/>
        <About/>
        <Events/>
        <About/>
        <Footer/>
      </div>
    </>
  )
}

export default App
