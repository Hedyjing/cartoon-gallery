import React from 'react';
import logo from './assets/images/logo.svg';
import cartoons from './mockdata/cartoon.json'
import Cartoon from './components/Cartoon'
import styles from './App.module.css';
import ShoppingCart from './components/ShoppingCart';

interface Props { }
interface State {
  cartoonGallery: any[]
}

class App extends React.Component<Props, State>{
  constructor(props: Props) {
    super(props);
    this.state = {
      cartoonGallery: [],
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => this.setState({ cartoonGallery: data }));
  }
  render() {
    return (
      <div className={styles.app}>
        <div className={styles.appHeader}>
          <img src={logo} alt="logo" className={styles.appLogo} />
          <h1>Cartoon Gallery Card Show</h1>
        </div>
        <ShoppingCart />
        <div className={styles.robotList}>
          {this.state.cartoonGallery.map(c => <Cartoon id={c.id} name={c.name} email={c.email} />)}
        </div>
      </div>
    )
  }
}

export default App;
