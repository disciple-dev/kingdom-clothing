import "./login-form.styles.scss";
import { useState } from "react";

import Button from "../../button/button.component";
import FormInput from "../../form-input/form-input.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

import {
  authenticateWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../../services/firebase";

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

  const resetFormData = () => {
    setFormFields(initialFormState);
  };

  const onLoginFormSubmit = async (event) => {
    event.preventDefault();
    setFormDisabled(true);

    const { email, password } = formFields;

    await authenticateWithEmailAndPassword(email, password).catch((err) => {
      const message = getErrorMessage(err.code);
      alert(message);
      console.error(err.code);
    });
    resetFormData();
    setFormDisabled(false);
  };

  const logGoogleUser = async () => {
    await signInWithGooglePopup();
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
          <Button type="submit" label="Login">
            <span>
              Login <FontAwesomeIcon icon={faArrowRightToBracket} />
            </span>
          </Button>
          <Button
            type="button"
            onClick={logGoogleUser}
            template="google"
            label="Sign in with Google"
          >
            <span>
              Sign in with Google <FontAwesomeIcon icon={faGoogle} />
            </span>
          </Button>
        </fieldset>
      </fieldset>
    </form>
  );
};

export default EmailLoginForm;
