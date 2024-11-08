// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './header';
import Social from './social';
import Team from './team';
import Cloud from './cloud';
import Footer from './footer';



const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Social />
        <Team />
        <Cloud />
      </main>
      <Footer />
    </div>
  );
};

export default App;