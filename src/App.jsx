import Header from './components/Header'
import RouteError from './components/RouteError';
import SobreMi from './components/SobreMi';
import Main from './components/Main';
import Conocimientos from './components/Conocimientos';
import Proyectos from './components/Proyectos';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import { AppBar } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Header />
        <div className='-mt-60 md:-mt-96'>
          <Main />
          <SobreMi />
        </div>
        <Conocimientos />
        <Proyectos />
        <Contacto />
        <Footer />
      </BrowserRouter>
    </div>

  )
}

export default App
