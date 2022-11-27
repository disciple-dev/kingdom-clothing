import { Outlet, Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { signOut } from "../../services/firebase";

import "./navigation.styles.scss";
import { ReactComponent as Logo } from "../../assets/images/crown.svg";
import Button from "../../components/button/button.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  const logout = async () => {
    await signOut();
  };

  return (
    <>
      <nav className="navigation">
        <Link to="/" className="logo-container">
          <Logo className="logo" />
        </Link>
        <div className="links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {/* <Link className="nav-link">Contact</Link> */}
          {!currentUser ? (
            <Link className="nav-link" to="/auth/login">
              Login <FontAwesomeIcon icon={faArrowRightToBracket} />
            </Link>
          ) : (
            <Button onClick={() => logout()} label="Logout" template="link">
              Logout <FontAwesomeIcon icon={faArrowRightFromBracket} />
            </Button>
          )}
          <Link className="nav-link">Cart</Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
