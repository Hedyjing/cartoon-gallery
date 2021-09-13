import React from 'react';

interface CartoonProps {
  id: number,
  name: string,
  email: string
}

const Cartoon: React.FC<CartoonProps> = ({id, name, email}) => {

  return <li>
    <img src={`https://robohash.org/${id}`} alt="cartoon" />
    <h2>{name}</h2>
    <p>{email}</p>
    </li>;
}

export default Cartoon;