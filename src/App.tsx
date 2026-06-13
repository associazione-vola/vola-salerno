import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CinquePerMille from './components/CinquePerMille';
import ChiSiamo from './components/ChiSiamo';
import StorieSuccess from './components/StorieSuccess';
import InCercaDiCasa from './components/InCercaDiCasa';
import EmergenciesHub from './components/EmergenciesHub';
import Contatti from './components/Contatti';
import Footer from './components/Footer';

function GreenDivider() {
  return (
    <div className="hidden sm:flex items-center justify-center py-2">
      <div className="h-px w-16 bg-gradient-to-r from-transparent to-green-300" />
      <div className="mx-3 w-2 h-2 rounded-full bg-green-400 opacity-60" />
      <div className="h-px w-16 bg-gradient-to-l from-transparent to-green-300" />
    </div>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CinquePerMille />
        <ChiSiamo />
        <GreenDivider />
        <StorieSuccess />
        <GreenDivider />
        <InCercaDiCasa />
        <GreenDivider />
        <EmergenciesHub />
        <GreenDivider />
        <Contatti />
      </main>
      <Footer />
    </>
  );
}

export default App;
