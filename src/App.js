import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";
import SignIn from "./routes/auth/signin.component";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="auth">
            <Route path="login" element={<SignIn />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
