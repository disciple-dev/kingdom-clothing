import "./form-input.style.scss";

const FormInput = ({ label, ...inputProps }) => {
  return (
    <fieldset className="group">
      {label && <label>{label}</label>}
      <input {...inputProps} className="form-input" />
    </fieldset>
  );
};

export default FormInput;
