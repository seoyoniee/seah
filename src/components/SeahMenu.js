import React, { Component } from 'react';
import searchIcon from './search-icon.png';
import 'components/SeahMenu.css';
import { Link } from 'react-router-dom';

class SeahMenu extends Component{

  constructor() {
    super();

    //showForm이 false면 searchForm이 안뜨고 true면 input창이 보일꺼야
    //화살표 버튼을 누르면 showForm의 값이 false -> true
    this.state = {
      showForm : false
    };
  }

  showForm() {
    this.setState({
      showForm : !this.state.showForm
    });
  }

  render() {

    let searchForm = this.state.showForm ? (
        <form className="menu_search_from" method="POST">
          <input className="menu_search_input" placeholder="Type what you want" />
        </form>
    ) : '';


    let linksLeft = this.props.linksLeft.map((link, index) => {
      return (
        <li key={index} className="menu_list_item"><Link className="menu_link" to={link.path}>{link.label}</Link></li>
      );
    });

    let linksRight = this.props.linksRight.map((link, index) => {
      return (
        <li key={index} className="menu_list_item"><Link className="menu_link" to={link.path}>{link.label}</Link></li>
      );
    });

//컴포넌트에 이벤트메소드를 연결하는 방법 = binding
    return (
        <nav className="menu">

          <div className="menu_left">
            <ul className="menu_list">
              {linksLeft}
            </ul>
          </div>

          <h1 style={{
            backgroundImage : 'url(' + this.props.logo +')'
          }} className="menu_logo">SEAH</h1>

          <div className="menu_right">
            <ul className="menu_list">
                {linksRight}
            </ul>

            <button onClick={this.showForm.bind(this)} style={{
              backgroundImage : 'url(' + searchIcon + ')'
            }} className="menu_search_button"></button>

            {searchForm}

          </div>
        </nav>
    );
  }
}

export default SeahMenu;
