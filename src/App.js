import React from 'react';
import "./App.css";
import "./components/Navbar.css";
import ApartmentGrid from './components/ApartmentGrid';
import Banner from './components/Banner';

function App() {
  return (
    <div>
      <Banner />
      <ApartmentGrid />
    </div>
  );
}

export default App;