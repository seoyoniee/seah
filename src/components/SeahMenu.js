import React, { Component } from 'react';
import searchIcon from 'components/search-icon.png';
import loginIcon from 'components/login-icon.png';
import cartIcon from 'components/cart-icon.png';
import 'components/SeahMenu.css';
import { Link } from 'react-router-dom';
import ShopSubMenu from 'components/ShopSubMenu.js';

class SeahMenu extends Component{

  constructor() {
    super();

    //showForm이 false면 searchForm이 안뜨고 true면 input창이 보일꺼야
    //화살표 버튼을 누르면 showForm의 값이 false -> true
    this.state = {
      showShopMenu : false
    };
  }

  showForm() {
    this.setState({
      showForm : !this.state.showForm
    });
  }

  handleHover() {
    this.setState({
      showShopMenu : !this.state.showShopMenu
    });
  }

  render() {


//컴포넌트에 이벤트메소드를 연결하는 방법 = binding
    return (
        <nav className="menu">
              <li className="menu_list_item" onMouseLeave={this.handleHover.bind(this)}>
                <Link className="menu_link" to="/shop" onMouseEnter={this.handleHover.bind(this)}>SHOP</Link>
                {this.state.showShopMenu && <ShopSubMenu />}
              </li>

              <li className="menu_list_item">
                <Link className="menu_link" to="/about">ABOUT</Link>
              </li>



          <h1 style={{
            backgroundImage : 'url(' + this.props.logo +')'
          }} className="menu_logo">SEAH</h1>


          <button style={{
            backgroundImage : 'url(' + searchIcon + ')'
          }} className="menu_button"></button>


          <Link to='/login'>
          <button style={{
            backgroundImage : 'url(' + loginIcon + ')'
          }} className="menu_button"></button></Link>

          <Link to='/cart'>
          <button style={{
            backgroundImage : 'url(' + cartIcon + ')'
          }} className="menu_button"></button></Link>

        </nav>

    );
  }
}

export default SeahMenu;
