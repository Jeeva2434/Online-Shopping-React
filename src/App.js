import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Header from './components/Header';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <BrowserRouter>
      <main className='App'>
        <Header/>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/productDetail/:id' element={<ProductDetail/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App;
