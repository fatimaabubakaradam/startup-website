// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './header';
import Social from './social';
import Footer from './footer';
import Team from './team';
import Cloud from './cloud';


const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Team />
        <Social />
        <Cloud />
      </main>
      <Footer />
    </div>
  );
};

export default App;