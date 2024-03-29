import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Orders from './containers/Orders/Orders';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import CheckOut from './containers/Checkout/Checkout';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
          <Route path="/checkout/" component={CheckOut}/>
          <Route path="/orders" component={Orders}/>
          <Route path="/" exact component={BurgerBuilder}/>
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
