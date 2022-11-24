import "./form-input.style.scss";

const FormInput = ({ label, ...inputProps }) => {
  return (
    <fieldset class="group">
      {label && <label>{label}</label>}
      <input {...inputProps} className="form-input" />
    </fieldset>
  );
};

export default FormInput;
