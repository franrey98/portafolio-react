import Header from './components/Header'
import SobreMi from './components/SobreMi';
import Main from './components/Main';
import Conocimientos from './components/Conocimientos';
import Proyectos from './components/Proyectos';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

function App() {

  return (
    <div>
      <Header />
      <div className='-mt-60 md:-mt-96'>
        <Main />
        <SobreMi />
      </div>
      <Conocimientos />
      <Proyectos />
      <Contacto />
      <Footer />
    </div>

  )
}

export default App
