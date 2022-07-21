import Header from './components/Header'
import SobreMi from './components/SobreMi';
import Main from './components/Main';
import Conocimientos from './components/Conocimientos';
import Proyectos from './components/Proyectos';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import { AppBar } from '@mui/material';


function App() {

  return (
    <div>
      <AppBar color="default">
        <Header />
      </AppBar>
      <Main />
      <SobreMi />
      <Conocimientos />
      <Proyectos />
      <Contacto />
      <Footer />
    </div>

  )
}

export default App
