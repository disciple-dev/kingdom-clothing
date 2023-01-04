import {
  SigninPageContainer,
  LoginFormSection,
  RegistrationCallout,
} from "./signin.page.styles";
import { Link } from "react-router-dom";
import Button from "../../../components/button/button.component";
import LoginForm from "../../../components/forms/login/login-form.component";

const SignIn = () => {
  return (
    <SigninPageContainer>
      <LoginFormSection>
        <h1>Sign In</h1>
        <LoginForm />
      </LoginFormSection>
      <RegistrationCallout>
        <h2>Don't have an account?</h2>
        <Link to="/auth/register">
          <Button label="Register with Email" />
        </Link>
      </RegistrationCallout>
    </SigninPageContainer>
  );
};

export default SignIn;
