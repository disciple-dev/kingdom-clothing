import { InputHTMLAttributes, FunctionComponent } from "react";
import { FieldSet, Input, Label } from "./form-input.style";

interface IFormInput extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const FormInput: FunctionComponent<IFormInput> = ({
  label,
  ...inputProps
}: IFormInput) => {
  return (
    <FieldSet>
      {label && <Label>{label}</Label>}
      <Input {...inputProps} />
    </FieldSet>
  );
};

export default FormInput;
