import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";
import SignIn from "./routes/auth/sign-in/signin.page.component";
import Navigation from "./components/navigation/navigation.component";
import Home from "./routes/home/home.page.component";
import Shop from "./routes/shop/shop.page.component";
import RegistrationPage from "./routes/auth/registration/registration.page.component";
import CheckoutPage from "./components/checkout/checkout.page.component";

const App = () => {
  return (
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
  );
};

export default App;
