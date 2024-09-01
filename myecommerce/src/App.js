import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Product from './components/Product';
import { Route, Routes } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';

function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/product' element={<Product />} />
        <Route exact path='/product/:id' element={<ProductDetail />} />
        <Route exact path='/card' element={<Cart />}/>
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<Contact />} />

      </Routes>



    </>

  );
}

export default App;
