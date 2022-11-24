import "./signin-page.styles.scss";
import { Link } from "react-router-dom";
import {
  createAuthUserFromAuth,
  signInWithGooglePopup,
} from "../../../services/firebase";
import Button from "../../../components/button/button.component";

const SignIn = () => {
  const logGoogleUser = async () => {
    await signInWithGooglePopup().then(async ({ user }) => {
      const userDocumentReference = await createAuthUserFromAuth(user);
      console.log({ userDocumentReference });
    });
  };

  return (
    <main>
      <section>
        <h1>Sign In</h1>
        <Button
          onClick={logGoogleUser}
          template="google"
          label="Sign in with Google"
        />
      </section>
      <aside>
        <h2>Don't have an account?</h2>
        <Link to="/auth/register">
          <Button label="Register with Email" />
        </Link>
      </aside>
    </main>
  );
};

export default SignIn;
