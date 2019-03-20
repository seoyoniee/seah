import React, { Component } from 'react';
import 'components/ShopSubMenu.css';
import { Link } from 'react-router-dom';



const menuList1 = [
  {label : 'Leggings', path : '/shop/leggings'},
  {label : 'Sports Bras', path : '/shop/sports-bras'},
  {label : 'Tanks', path : '/shop/tanks'},
  {label : 'Tops', path : '/shop/tops'},
  {label : 'pants', path : '/shop/pants'},
  {label : 'Sweatshirts & Sweaters', path : '/shop/sweatshirts'},
  {label : 'Jackets & Coat', path : '/shop/jackets-coat'}
]

const menuList2 = [
  {label : 'Revive', path : '/shop/revive'},
  {label : 'Sculpt', path : '/shop/sculpt'},
  {label : 'Letelux', path : '/shop/letelux'},
  {label : 'Lolux', path : '/shop/lolux'},
  {label : 'Seamless', path : '/shop/seamless'}
]

const menuList3 = [
  {label : 'Shop New Arrivals', path : '/shop/shop-new-arrivals'},
  {label : 'Shop Prints', path : '/shop/shop-prints'},
  {label : 'Shop Best Sellers', path : '/shop/shop-best-sellers'},
  {label : 'Shop Final Few', path : '/shop/shop-final-few'},
  {label : 'Gift Cards', path : '/shop/gift-cards'}
]


//menuList를 props로 받아서 반복해서 subCategory를 불러
class ShopSubMenuItem extends Component {
  render() {
    const menuLists = this.props.menuLists;
    return (
      <ul>
          <h1>{this.props.menuCategory}</h1>
          {menuLists.map((menu, index) => {
            return (
              <li key= {index} ><Link to={menu.path}>{menu.label}</Link></li>
            )})}
      </ul>
    );
  }
}


class ShopSubMenu extends Component {
  render () {
    return (
      <div>
        <ShopSubMenuItem menuLists = {menuList1} menuCategory = "SHOP BY STYLE"/>
        <ShopSubMenuItem menuLists = {menuList2} menuCategory = "SHOP BY FABRIC"/>
        <ShopSubMenuItem menuLists = {menuList3} menuCategory = "MORE"/>
      </div>

    );
  }
}

export default ShopSubMenu;
