import React, { useContext, useState } from 'react';
import styles from './ShoppingCart.module.css';
import { FiShoppingCart } from 'react-icons/fi';
import {appContext} from '../AppState'


const ShoppingCart: React.FC = () => {
  const value = useContext(appContext);
  const [isOpen, setIsOpen] = useState(false);


  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if ((e.target as HTMLElement).nodeName === 'SPAN') {
      setIsOpen(!isOpen)
    }
  }
  return (
    <div className={styles.cartContainer}>
      <button className={styles.button} onClick={handleClick}>
        <FiShoppingCart />
        <span>购物车{value.shoppingCart.items.length}（件）</span>
      </button>
      <div className={styles.cartDropDown}
        style={{
          display: isOpen ? 'block' : 'none'
        }}
      >
        <ul>
          {value.shoppingCart.items.map(item => <li>{item.name}</li>)}
        </ul>
      </div>
    </div>
  );

}

export default ShoppingCart;