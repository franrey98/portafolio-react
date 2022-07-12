import Header from './components/Header'
import RouteError from './components/RouteError';
import SobreMi from './components/SobreMi';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="*" element={<RouteError />} />
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App
