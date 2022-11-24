import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";
import SignIn from "./routes/auth/sign-in/signin-page.component";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import RegistrationPage from "./routes/auth/registration/registration-page.component";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="auth">
            <Route path="login" element={<SignIn />} />
            <Route path="register" element={<RegistrationPage />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
