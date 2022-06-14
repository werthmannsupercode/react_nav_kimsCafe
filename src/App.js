import Header from './components/Header'
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Speisekarte from './pages/Speisekarte';
import Kontakt from './pages/Kontakt';
import Öffnungszeiten from './pages/Oeffnungszeiten';
import Galerie from './pages/Galerie';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Speisekarte />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/oeffnungszeiten" element={<Öffnungszeiten />} />
        <Route path="/galerie" element={<Galerie />} />
      </Routes>
    </div>
  );
}

export default App;
