// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import LeadForm from './components/leadForm';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <LeadForm />
      <Footer />
    </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
