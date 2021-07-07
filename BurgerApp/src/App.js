import React, { Component } from 'react';
import Layout from './components/Layout/Layout'
import BurgerBuiilder from './containers/BurgerBuilder/BurgerBuilder';
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuiilder />
        </Layout>
      </div>
    );
  }
}

export default App;
