import { appendFile } from 'fs';
import React from 'react';
import { appContext } from '..';
import styles from './Cartoon.module.css';

interface CartoonProps {
  id: number,
  name: string,
  email: string
}

const Cartoon: React.FC<CartoonProps> = ({ id, name, email }) => {

  return (
    <appContext.Consumer>
      {
        (value) => <div className={styles.cardContainer}>
          <img src={`https://robohash.org/${name}`} alt="cartoon" />
          <h2>{name}</h2>
          <p>{email}</p>
          <p>作者: {value.username}</p>
        </div>
      }
    </appContext.Consumer>)
}

export default Cartoon;