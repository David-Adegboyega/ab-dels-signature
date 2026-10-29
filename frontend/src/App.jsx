import './App.css';
import Header from './components/Header';
import ProductCatalogue from './components/ProductCatalogue';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <ProductCatalogue />
      </main>
      <Footer />
    </>
  );
}

export default App;