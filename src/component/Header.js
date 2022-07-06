import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'
import "../App.css";
import Text from './Text'
function Header() {
  return (
    <>
    
  <div className="tex">
    
        <div className="rout">
       <Link to="/Cards" style={{ textDecoration: 'none' ,color:'orange'}}>الصور</Link>
{'                     '}
      <Link to="/About" style={{ textDecoration: 'none',color:'orange' }}>التاريخ</Link> 
    </div>
    </div>
    </>
  );
}

export default Header;
