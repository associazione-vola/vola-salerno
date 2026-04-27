import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CinquePerMille from './components/CinquePerMille';
import ChiSiamo from './components/ChiSiamo';
import StorieSuccess from './components/StorieSuccess';
import InCercaDiCasa from './components/InCercaDiCasa';
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
        <ChiSiamo />
        <StorieSuccess />
        <InCercaDiCasa />
        <EmergenciesHub />
        <Contatti />
      </main>
      <Footer />
    </>
  );
}

export default App;
