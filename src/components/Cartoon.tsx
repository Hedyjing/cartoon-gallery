import { appendFile } from 'fs';
import React, { useContext } from 'react';
import { appContext } from '../AppState';
import styles from './Cartoon.module.css';

interface CartoonProps {
  id: number,
  name: string,
  email: string
}

const Cartoon: React.FC<CartoonProps> = ({ id, name, email }) => {
  const value = useContext(appContext);
  return (
    <div className={styles.cardContainer}>
      <img src={`https://robohash.org/${name}`} alt="cartoon" />
      <h2>{name}</h2>
      <p>{email}</p>
      <p>作者: {value.username}</p>
    </div>
  )
}

export default Cartoon;