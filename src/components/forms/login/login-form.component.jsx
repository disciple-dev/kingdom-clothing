import "./login-form.styles.scss";
import Button from "../../button/button.component";
import FormInput from "../../form-input/form-input.component";
import {
  authenticateWithEmailAndPassword,
  createAuthUserFromAuth,
  signInWithGooglePopup,
} from "../../../services/firebase";
import { useState } from "react";

const initialFormState = {
  email: "",
  password: "",
};

const getErrorMessage = (message) => {
  switch (message) {
    case "auth/wrong-password":
      return "Wrong password provided.";
    case "auth/user-not-found":
      return "User does not exist.";
    default:
      return "An unexpected error occured. Please try again.";
  }
};

const EmailLoginForm = () => {
  const [formFields, setFormFields] = useState(initialFormState);
  const [formDisabled, setFormDisabled] = useState(false);
  const { email, password } = formFields;

  const onFormInputChange = (event) => {
    const { name, value } = event.target;

    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const onLoginFormSubmit = async (event) => {
    event.preventDefault();
    setFormDisabled(true);

    const { email, password } = formFields;

    const authedUser = await authenticateWithEmailAndPassword(
      email,
      password
    ).catch((err) => {
      const message = getErrorMessage(err.code);
      alert(message);
      console.error(err.code);
    });

    setFormDisabled(false);

    console.info({ authedUser });
  };

  const logGoogleUser = async () => {
    await signInWithGooglePopup().then(async ({ user }) => {
      const userDocumentReference = await createAuthUserFromAuth(user);
      console.log(userDocumentReference);
    });
  };

  return (
    <form onSubmit={onLoginFormSubmit}>
      <fieldset disabled={formDisabled}>
        <FormInput
          type="email"
          label="Email"
          name="email"
          autoComplete="username"
          required
          onChange={onFormInputChange}
          value={email}
        />
        <FormInput
          type="password"
          label="Password"
          name="password"
          autoComplete="password"
          required
          onChange={onFormInputChange}
          value={password}
        />
        <fieldset className="action-buttons">
          <Button type="submit" label="Login" />
          <Button
            type="button"
            onClick={logGoogleUser}
            template="google"
            label="Sign in with Google"
          />
        </fieldset>
      </fieldset>
    </form>
  );
};

export default EmailLoginForm;
