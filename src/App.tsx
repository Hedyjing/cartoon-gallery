import React, { useEffect, useState } from 'react';
import logo from './assets/images/logo.svg';
import cartoons from './mockdata/cartoon.json'
import Cartoon from './components/Cartoon';
import CartoonDiscount from './components/CartoonDiscount';
import styles from './App.module.css';
import ShoppingCart from './components/ShoppingCart';

interface Props { }
interface State {
  cartoonGallery: any[]
  count: number
}

const App: React.FC = () => {
  const [count, setCount] = useState(0);
  const [cartoonGallery, setCartoonGallery] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();

  // 当不传入第二个参数, 每次渲染结束后都会被调用, 相当于componentDidUpdate
  useEffect(() => {
    document.title = `点击${count}次`;
  }, [count])
  // 当不传入第二个参数, 会不断地请求数据
  useEffect(() => {
    let fetchData = async () => {
      setLoading(true);
      try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users")
        let data = await response.json();
        setCartoonGallery(data);
      } catch(e) {
        setError((e as Error).message);
      }
      setLoading(false);
    }
    fetchData();
  }, [])
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
      {(error || error === '') && <div>网站错误: {error}</div>}
      {!loading ?
        <div className={styles.robotList}>
          {cartoonGallery.map((c, index) => index % 2? <Cartoon id={c.id} name={c.name} email={c.email} />
          : <CartoonDiscount id={c.id} name={c.name} email={c.email}></CartoonDiscount>
          )}
        </div>
        : <h1>Loading</h1>
      }
    </div>
  )
}

export default App;
