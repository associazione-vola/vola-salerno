import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CinquePerMille from './components/CinquePerMille';
import StorieSuccess from './components/StorieSuccess';
import InCercaDiCasa from './components/InCercaDiCasa';
import ChiSiamo from './components/ChiSiamo';
import RaccoltaFondi from './components/RaccoltaFondi';
import Contatti from './components/Contatti';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CinquePerMille />
        <StorieSuccess />
        <InCercaDiCasa />
        <RaccoltaFondi />
        <ChiSiamo />
        <Contatti />
      </main>
      <Footer />
    </>
  );
}

export default App;
