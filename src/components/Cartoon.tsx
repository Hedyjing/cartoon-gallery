import React from 'react';
import styles from './Cartoon.module.css';

interface CartoonProps {
  id: number,
  name: string,
  email: string
}

const Cartoon: React.FC<CartoonProps> = ({id, name, email}) => {

  return <div className={styles.cardContainer}>
    <img src={`https://robohash.org/${name}`} alt="cartoon" />
    <h2>{name}</h2>
    <p>{email}</p>
    </div>;
}

export default Cartoon;