import React from 'react';
import logo from './logo.svg';
import cartoons from './mockdata/cartoon.json'
import Cartoon from './components/Cartoon'
import styles from './App.module.css';


function App() {
  return (
    <div className={styles.app}>
      <div className={styles.robotList}>
        {cartoons.map(c => <Cartoon id={c.id} name={c.name} email={c.email} />)}
      </div>
    </div>
  )
}

export default App;
