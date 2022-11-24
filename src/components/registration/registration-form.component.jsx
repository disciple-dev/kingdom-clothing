import "./registration-form.styles.scss";
import { useState } from "react";
import { createAuthUserWithEmailAndPassword } from "../../services/firebase";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";

const initialFormState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const RegistrationForm = () => {
  const [formFields, setFormFields] = useState(initialFormState);
  const [disabled, setDisabled] = useState(false);
  const { name, email, password, confirmPassword } = formFields;

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

  const onFormSubmit = async (event) => {
    event.preventDefault();
    setDisabled(true);
    const formData = new FormData(event.target);
    const { email, password, confirmPassword } = Object.fromEntries(formData);
    if (password !== confirmPassword) return alert("Passwords do not match.");
    await createAuthUserWithEmailAndPassword(email, password)
      .then(() => {
        resetFormData();
        setDisabled(false);
      })
      .catch((err) => {
        alert("Encountered an error creating user");
        console.error(err);
      });
  };

  return (
    <>
      <h1>Please register</h1>
      <form onSubmit={onFormSubmit}>
        <fieldset disabled={disabled}>
          <FormInput
            label="Name"
            type="text"
            name="name"
            autoComplete="name"
            required
            onChange={onFormInputChange}
            value={name}
          />
          <FormInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            required
            onChange={onFormInputChange}
            value={email}
          />
          <FormInput
            label="Password"
            type="password"
            autoComplete="new-password"
            name="password"
            required
            minLength={11}
            pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{11,}$"
            onChange={onFormInputChange}
            value={password}
          />
          <FormInput
            label="Password Confirmation"
            type="password"
            autoComplete="new-password"
            name="confirmPassword"
            required
            onChange={onFormInputChange}
            value={confirmPassword}
          />
          <fieldset class="action-buttons">
            <Button label="Register" type="submit" />
            <Button
              label="Reset Form"
              template="inverted"
              onClick={resetFormData}
            />
          </fieldset>
        </fieldset>
      </form>
    </>
  );
};

export default RegistrationForm;
