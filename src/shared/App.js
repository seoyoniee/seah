import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, Shop, About, Login, Cart } from 'pages';
import SeahMenu from 'components/SeahMenu.js';
import logo from 'components/logo.jpeg';


class App extends Component {
  render() {
    let linksLeft = [
         {label : 'Shop', path:'/shop'},
         {label : 'About', path:'/about'},
        ];

        let linksRight = [
          {label : 'Login', path:'/login'},
          {label : 'Cart', path:'/cart'},
        ];

    return (
      <div className="container center">
        <Route exact path="/"
        render={(props) => <SeahMenu {...props} logo={logo}/>}
        />
        <Route path="/shop" component={Shop} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/cart" component={Cart} />
      </div>
    );
  }
}

export default App;
