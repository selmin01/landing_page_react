// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Hero from './components/hero';
import LeadForm from './components/leadForm';
import Footer from './components/footer';
import AboutPage from './pages/About';
import HomePage from './pages/HomePage';

const Home = () => (
  <>
    <Hero />
    <HomePage />
    
  </>
);

const Contact = () => (
  <LeadForm />
  // <div className="container mx-auto mt-12 p-4">
  //     <h1 className="text-3xl font-bold mb-4">Contato</h1>
  //     <p>Informações de contato...</p>
  // </div>
);

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
