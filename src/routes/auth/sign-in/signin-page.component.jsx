import "./signin-page.styles.scss";
import { Link } from "react-router-dom";
import Button from "../../../components/button/button.component";
import LoginForm from "../../../components/forms/login/login-form.component";

const SignIn = () => {
  return (
    <main>
      <section>
        <h1>Sign In</h1>
        <LoginForm />
      </section>
      <section>
        <h2>Don't have an account?</h2>
        <Link to="/auth/register">
          <Button label="Register with Email" />
        </Link>
      </section>
    </main>
  );
};

export default SignIn;
