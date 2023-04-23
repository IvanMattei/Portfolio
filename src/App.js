import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Progetti from "./components/Progetti";
import Contact from "./components/Contact";
import Footer from "./components/Footer"

function App() {
  return (
    <div>
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Progetti/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App;
