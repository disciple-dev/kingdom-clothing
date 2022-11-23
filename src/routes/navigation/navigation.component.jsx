import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import "./navigation.styles.scss";
import { ReactComponent as Logo } from "../../assets/images/crown.svg";

const Navigation = () => {
  return (
    <Fragment>
      <nav className="navigation">
        <Link to="/" className="logo-container">
          <Logo className="logo" />
        </Link>
        <div className="links-container">
          {/* <Link className="nav-link" to="/shop">
            Shop
          </Link> */}
          {/* <Link className="nav-link">Contact</Link> */}
          <Link className="nav-link" to="/auth/login">
            Login
          </Link>
          <Link className="nav-link">Cart</Link>
        </div>
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
