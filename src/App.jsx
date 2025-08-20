import React from 'react'
import './App.css'
import Header from './components/header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  )
}

export default App;
