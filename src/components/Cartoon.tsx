import { appendFile } from 'fs';
import React, { useContext } from 'react';
import { appContext, setStateContext } from '../AppState';
import { withAddToCart } from './AddToCart';
import styles from './Cartoon.module.css';

export interface CartoonProps {
  id: number,
  name: string,
  email: string,
  addToCart: (id: number, name: string) => void
}



const Cartoon: React.FC<CartoonProps> = ({ id, name, email, addToCart }) => {
  const value = useContext(appContext);

  return (
    <div className={styles.cardContainer} onClick={() => addToCart(id, name)}>
      <img src={`https://robohash.org/${name}`} alt="cartoon" />
      <h2>{name}</h2>
      <p>{email}</p>
      <p>作者: {value.username}</p>
      <button>加入购物车</button>
    </div>
  )
}

export default withAddToCart(Cartoon);