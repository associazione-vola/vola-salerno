import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CinquePerMille from './components/CinquePerMille';
import StorieSuccess from './components/StorieSuccess';
import InCercaDiCasa from './components/InCercaDiCasa';
import RaccoltaFondi from './components/RaccoltaFondi';
import ChiSiamo from './components/ChiSiamo';
import EmergenciesHub from './components/EmergenciesHub';
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
        <EmergenciesHub />
        <Contatti />
      </main>
      <Footer />
    </>
  );
}

export default App;
