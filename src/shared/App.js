import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, Shop, About, Login, Cart } from 'pages';
import SeahMenu from 'components/SeahMenu.js';
import ImgBanner from 'components/ImgBanner.js';
import logo from 'components/logo.jpeg';
import img1 from 'components/seah_img1.png';
import img2 from 'components/seah_img2.png';
import img3 from 'components/seah_img3.png';


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
      <div>
        <div className="container center">
          <Route exact path="/"
          render={(props) => <SeahMenu {...props} logo={logo}/>}
          />
          <Route path="/shop" component={Shop} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/cart" component={Cart} />
        </div>
        <ImgBanner img={img1} title="WHAT'S NEW" />
        <ImgBanner img={img2} title="LEGGINGS" />
        <ImgBanner img={img3} title="BEST SELLERS"/>
      </div>
    );
  }
}

export default App;
