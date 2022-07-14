//import logo from './logo.svg';
//import './App.css';
import './App.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarLayout from './layout/navbar';
import Home from './components/home';
//import Cart from './components/cart';
import { Provider } from 'react-redux';
import Store from './store/store';
import Form from './components/form';
import Message from './components/message';
import Dashboard from './components/dashboard';
import Footer from './layout/footer';
import Demo from './components/demo';
import Contact from './components/contact';




function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <NavbarLayout/>
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/demo" element={<Demo />} /> 
            <Route path="/form" element={<Form />} />
            <Route path="/message/:id" element={<Message />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        <Footer/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
