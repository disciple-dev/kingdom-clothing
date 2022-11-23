import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../services/firebase";

const SignIn = () => {
  //   const logGoogleUser = async () => {
  //     await signInWithGooglePopup().then(async ({ user }) => {
  //       const userDocumentReference = await createUserDocumentFromAuth(user);
  //       console.log({ userDocumentReference });
  //     });
  //   };

  return (
    <header>
      <h1>Sign In</h1>
      {/* <button onClick={logGoogleUser}>Sign in with Google</button> */}
    </header>
  );
};

export default SignIn;
