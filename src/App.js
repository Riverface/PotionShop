import './App.css';

import Footer from './Components/Footer';
import Header from './Components/Header';
import PotionControl from './Components/PotionControl'
import logo from './logo.svg';

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
