import { appendFile } from 'fs';
import React, { useContext } from 'react';
import { appContext, setStateContext } from '../AppState';
import styles from './Cartoon.module.css';
import { CartoonProps } from './Cartoon'
import { withAddToCart } from './AddToCart';



const CartoonDiscount: React.FC<CartoonProps> = ({ id, name, email, addToCart }) => {
  const value = useContext(appContext);

  return (
    <div className={styles.cardContainer}>
      <img src={`https://robohash.org/${name}`} alt="cartoon" />
      <h2>打折商品</h2>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>作者: {value.username}</p>
      <button onClick={() => {addToCart(id, name)}}>加入购物车</button>
    </div>
  )
}

export default withAddToCart(CartoonDiscount);