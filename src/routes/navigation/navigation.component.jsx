import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { signOut } from "../../services/firebase";

import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation.styles";
import { ReactComponent as Logo } from "../../assets/images/crown.svg";
import Button from "../../components/button/button.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import CartIcon from "../../components/cart/cart-icon.component";
import CartDropDown from "../../components/cart/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart.context";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartVisible } = useContext(CartContext);

  const logout = async () => {
    await signOut();
  };

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/" className="logo-container">
          <Logo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink className="nav-link" to="/shop">
            Shop
          </NavLink>
          {!currentUser ? (
            <NavLink className="nav-link" to="/auth/login">
              Login <FontAwesomeIcon icon={faArrowRightToBracket} />
            </NavLink>
          ) : (
            <Button onClick={() => logout()} label="Logout" template="link">
              Logout <FontAwesomeIcon icon={faArrowRightFromBracket} />
            </Button>
          )}
          <CartIcon />
        </NavLinks>
        {isCartVisible && <CartDropDown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
