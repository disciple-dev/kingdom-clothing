import { ButtonHTMLAttributes, FunctionComponent } from "react";
import {
  BaseButton,
  ButtonGoogle,
  ButtonInverted,
  ButtonSpinner,
  LinkButton,
} from "./button.styles";

export enum BUTTON_TYPE_CLASSES {
  base = "base",
  google = "google",
  inverted = "inverted",
  link = "link",
}

const getButton = (template = BUTTON_TYPE_CLASSES.base): typeof BaseButton =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: ButtonGoogle,
    [BUTTON_TYPE_CLASSES.inverted]: ButtonInverted,
    [BUTTON_TYPE_CLASSES.link]: LinkButton,
  }[template]);

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  template?: BUTTON_TYPE_CLASSES;
  isLoading?: boolean;
}

const Button: FunctionComponent<IButton> = ({
  label,
  template = BUTTON_TYPE_CLASSES.base,
  isLoading,
  children,
  ...props
}) => {
  const SelectedButton = getButton(template);
  return (
    <SelectedButton {...props} disabled={isLoading}>
      {isLoading ? <ButtonSpinner /> : children || label}
    </SelectedButton>
  );
};

export default Button;
