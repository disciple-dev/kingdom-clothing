import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import {
  createAuthUserFromAuth,
  onAuthStateChangedListener,
} from "./services/firebase";
import { setCurrentUser } from "./store/user/user.actions";
import { useDispatch } from "react-redux";

import "./App.scss";
import Navigation from "./components/navigation/navigation.component";
import { Spinner } from "./components/spinner/spinner.component";

const Home = lazy(() => import("./routes/home/home.page.component"));
const SignIn = lazy(
  () => import("./routes/auth/sign-in/signin.page.component")
);
const Shop = lazy(() => import("./routes/shop/shop.page.component"));
const RegistrationPage = lazy(
  () => import("./routes/auth/registration/registration.page.component")
);
const CheckoutPage = lazy(
  () => import("./components/checkout/checkout.page.component")
);

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    return onAuthStateChangedListener(async (user) => {
      if (user) {
        await createAuthUserFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps -- dispatch will never change
  }, []);

  return (
    <Suspense fallback={<Spinner />}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="shop/*" element={<Shop />} />
            <Route path="auth">
              <Route path="login" element={<SignIn />} />
              <Route path="register" element={<RegistrationPage />} />
            </Route>
            <Route path="/checkout" element={<CheckoutPage />} />
          </Route>
        </Routes>
      </Router>
    </Suspense>
  );
};

export default App;
