import React, { Component } from 'react';
import 'components/SeahMenu.css';
import { Link } from 'react-router-dom';


function ImgBanner(props) {
  return (

    <div className="img_container">
      <img src={props.img} className="img_banner" />
      <Link className="img_title" to={props.title}>{props.title}</Link>
   </div>

  )

}

export default ImgBanner;
