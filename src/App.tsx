import React, { useState } from 'react';
import logo from './assets/images/logo.svg';
import cartoons from './mockdata/cartoon.json'
import Cartoon from './components/Cartoon'
import styles from './App.module.css';
import ShoppingCart from './components/ShoppingCart';

interface Props { }
interface State {
  cartoonGallery: any[]
  count: number
}

const App: React.FC = () => {
  const [count, setCount] = useState(0);
  
    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <img src={logo} alt="logo" className={styles.appLogo} />
          <h1>Cartoon Gallery Card Show</h1>
        </div>
        <button onClick={() => {
          setCount(count + 1);
        }}>Click</button>
        <span>count: {count}</span>
        <ShoppingCart />
        {/* <div className={styles.robotList}>
          {this.state.cartoonGallery.map(c => <Cartoon id={c.id} name={c.name} email={c.email} />)}
        </div> */}
      </div>
    )
}

export default App;
