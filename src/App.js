import './App.css';
import './index.css';

import * as serviceWorker from './serviceWorker';

import Footer from './Components/Footer';
import Header from './Components/Header';
import PotionControl from './Components/PotionControl';
import React from 'react';
import { connect } from 'react-redux';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <PotionControl />
        <Footer />
      </Provider>
    </div>
  );
}
const unsubscribe = store.subscribe(() => console.log(store.getState()));
const store = createStore(potionListReducer);
store.subscribe(()=>console.log(store.getState()));
export default App;
