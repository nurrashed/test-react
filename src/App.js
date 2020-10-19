import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloFunctionalComponent from './component/HelloFunctionalComponent';
import HelloClassComponent from './component/HelloClassComponent';

function App() {
  return (
    <div className="App">
      <HelloFunctionalComponent name='Rashed' age='38'/>
      
      <HelloClassComponent/>
    </div>
  );
}

export default App;
