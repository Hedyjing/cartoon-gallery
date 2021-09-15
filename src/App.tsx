import React from 'react';
import logo from './assets/images/logo.svg';
import cartoons from './mockdata/cartoon.json'
import Cartoon from './components/Cartoon'
import styles from './App.module.css';
import ShoppingCart from './components/ShoppingCart';

interface Props { }
interface State {
  cartoonGallery: any[]
  count: number
}

class App extends React.Component<Props, State>{
  /** 
   * 生命周期第一阶段： 初始化
   * 初始化组件 state
  */
  constructor(props: Props) {
    super(props);
    this.state = {
      cartoonGallery: [],
      count: 0
    };
  }
  // 在组件创建好dom元素以后，挂载进页面的时候调用
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => this.setState({ cartoonGallery: data }));
  }

  /**
   * 生命周期第二阶段： 更新
   * 
   */
  // 组件更新后调用
  componentDidUpdate(){}
  /**
   * 生命周期第三阶段： 销毁 
   * 组件销毁后调用
   * 可以当作析构函数 destructor来使用
   */
  componentWillUnmount() {}


  render() {
    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <img src={logo} alt="logo" className={styles.appLogo} />
          <h1>Cartoon Gallery Card Show</h1>
        </div>
        <button onClick={() => {
          // setState异步更新， 同步执行， setState中第一个参数可以传入对象来设置state，也可以传入一个回调函数来对上一次state的状态进行处理
          // setState的第二个参数用来同步setState的异步操作的
          this.setState((preState, preProps) => {return { count: preState.count + 1}}, () => {console.log("count: ", this.state.count);})
          this.setState((preState, preProps) => {return { count: preState.count + 1}}, () => {console.log("count: ", this.state.count);})
          //this.setState({ count: this.state.count + 1}, () => {console.log("count: ", this.state.count);});
          
        }}>Click</button>
        <span>count: {this.state.count}</span>
        <ShoppingCart />
        <div className={styles.robotList}>
          {this.state.cartoonGallery.map(c => <Cartoon id={c.id} name={c.name} email={c.email} />)}
        </div>
      </div>
    )
  }
}

export default App;
