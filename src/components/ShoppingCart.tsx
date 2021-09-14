import React from 'react';
import styles from './ShoppingCart.module.css'
interface Props {

}

interface State {
  isOpen: boolean
}

class ShoppingCart extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    // this.handleClick = this.handleClick.bind(this);  // 给方法绑定类对象的this防止方法内部的this指向错误
  }
  // 对象方法中this， 函数为普通函数时， this指向函数本身， 为箭头函数时指向父级作用域；
  // 两个方案： 1， 用箭头函数， 2， 在构造函数中用bind给方法绑定类的this；
  handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    this.setState({ isOpen: !this.state.isOpen })
  }
  render() {
    return (
      <div className={styles.cartContainer}>
        <button className={styles.button} onClick={this.handleClick}>购物车2（件）</button>
        <div className={styles.cartDropDown}
          style={{
            display: this.state.isOpen ? 'block' : 'none'
          }}
        >
          <ul>
            <li>cartoon 1</li>
            <li>cartoon 2</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default ShoppingCart;