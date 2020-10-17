import React from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

import style from "../css/header.css";
import logo from "../images/logo.png";

class Header extends React.Component {
  state = {
    toggle: false,
    scrolled: false,
  };

  componentDidMount = () => {
    window.addEventListener("scroll", () => {
      // const isTop =window.scrollY<1 ;
      if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
      ) {
        this.setState({ scrolled: true });
      } else {
        this.setState({ scrolled: false });
      }
    });
  };

  menuExpand = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  render() {
    const { toggle } = this.state;
    return (
      <div>
        <nav className={this.state.scrolled ? "navbar scrolled" : "navbar"}>
          <Link to="/#home">
            <img className="nav-logo active" src={logo} />
          </Link>

          <div className="navbar-link   ">
            <ul className={toggle ? "toggle" : ""}>
              <li>
                <Link to="/home" activeClass="active">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/tour" activeClass="active">
                  Tour
                </Link>
              </li>
              <li>
                <Link to="/learn" activeClass="active">
                  Learn
                </Link>
              </li>
              <li>
                <Link to="/contact" activeClass="active">
                  Contact
                </Link>
              </li>

              <li>
                <Link to="/convention" className="mr-5 aboutme">
                  Convention
                </Link>
              </li>
              <li>
                <CloseIcon onClick={this.menuExpand} className="close-menu" />
              </li>
            </ul>
          </div>

          <div onClick={this.menuExpand} className="expand-menu">
            <MenuIcon className="navbar-menuicon" />
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
