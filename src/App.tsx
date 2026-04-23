import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ChiSiamo from './components/ChiSiamo';
import StorieSuccess from './components/StorieSuccess';
import InCercaDiCasa from './components/InCercaDiCasa';
import Contatti from './components/Contatti';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ChiSiamo />
        <StorieSuccess />
        <InCercaDiCasa />
        <Contatti />
      </main>
      <Footer />
    </>
  );
}

export default App;
