import React, { Component } from "react";
import "../../styles/HomePage/Nav.scss";
import { NavLink,Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <>
        <div className="topnav">
          <NavLink to="/" className="active">
            Home
          </NavLink>
          <NavLink to="/introduce">Giới thiệu</NavLink>
          <div className="drop">
            <NavLink to="/services">Dịch vụ</NavLink>
            <div className="dropdown-content">
              <NavLink to="">Link 1</NavLink>
              <NavLink to="">Link 2</NavLink>
              <NavLink to="">Link 3</NavLink>
            </div>
          </div>
          <Link className="login" to="/login">Đăng nhập</Link>
        </div>
      </>
    );
  }
}

export default Nav;
