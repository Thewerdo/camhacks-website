import Navbar from './Navbar';
import Homepage from './Home';
import About from './About';
import Sponsors from './Sponsors';
import FAQ from './FAQ';
import Team from './Team';
import Footer from './footer';

function App() {

  return (
    <div className="App gradient">
      <Navbar />
      <Homepage />
      <About />
      <Sponsors />
      <FAQ />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
