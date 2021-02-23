import './App.css';
import './index.css';

import Footer from './Components/Footer';
import Header from './Components/Header';
import PotionControl from './Components/PotionControl';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Header />
      <PotionControl />
      <Footer />
    </div>
  );
}


export default App;
