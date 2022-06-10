//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './layout/navbar';
import Home from './components/home';
import Cart from './components/cart';
import { Provider } from 'react-redux';
import Store from './store/store';



function App() {
  return (
    <Provider store={Store}>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/cart" element={<Cart />} /> 

      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
