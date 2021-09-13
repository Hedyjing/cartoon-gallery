import React from 'react';
import logo from './logo.svg';
import './App.css';
import cartoons from './mockdata/cartoon.json'
import Cartoon from './components/Cartoon'

function App() {
  return (
    <ul>
      {cartoons.map(c => <Cartoon id={c.id} name={c.name} email={c.email}/>)}
    </ul>
  )
}

export default App;
