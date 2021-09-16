import { appendFile } from 'fs';
import React, { useContext } from 'react';
import { appContext, setStateContext } from '../AppState';
import styles from './Cartoon.module.css';

interface CartoonProps {
  id: number,
  name: string,
  email: string
}



const CartoonDiscount: React.FC<CartoonProps> = ({ id, name, email }) => {
  const value = useContext(appContext);
  const setState = useContext(setStateContext);
  const addToCart = () => {
    if (setState) {
      setState((state) => {
        return {
          ...state,
          shoppingCart:{items:[...state.shoppingCart.items, {id: id, name: name}]}
        }
      })
    }
  }
  return (
    <div className={styles.cardContainer}>
      <img src={`https://robohash.org/${name}`} alt="cartoon" />
      <h2>打折商品</h2>
      <h2>{name}</h2>
      <p>{email}</p>
      <p>作者: {value.username}</p>
      <button onClick={addToCart}>加入购物车</button>
    </div>
  )
}

export default CartoonDiscount;