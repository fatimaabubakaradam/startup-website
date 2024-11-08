import './App.css';
import React from 'react';
import Header from './header'; 
import Social from './social';
import Team from './team';
import Mail from './mail';  
import Cloud from './cloud';
import Pic  from  './pic';
import Footer from './footer';


const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Social />
        <Team />
        <Cloud />
        <Mail /> 
        <Pic /> 
      </main>
      <Footer />
    </div>
  );
};

export default App;
