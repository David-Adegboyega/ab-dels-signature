import { Routes, Route } from 'react-router';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import HowToOrder from './pages/HowToOrder';
import Delivery from './pages/Delivery';
import Policies from './pages/Policies';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/how-to-order" element={<HowToOrder />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;