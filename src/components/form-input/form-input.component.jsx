import { FieldSet, Input, Label } from "./form-input.style";

const FormInput = ({ label, ...inputProps }) => {
  return (
    <FieldSet>
      {label && <Label>{label}</Label>}
      <Input {...inputProps} />
    </FieldSet>
  );
};

export default FormInput;
