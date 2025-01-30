import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Services from './components/Services';

const App = () => {
  return (
    <>
      <header className='bg-black '>
        <Navbar />
      </header>
      <main className='bg-white'>
        <Home />
        <About />
        <Services />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default App;
