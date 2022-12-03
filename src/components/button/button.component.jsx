import {
  BaseButton,
  ButtonGoogle,
  ButtonInverted,
  LinkButton,
} from "./button.styles.jsx";

export const BUTTON_TYPE_CLASSES = {
  base: "base",
  google: "google",
  inverted: "inverted",
  link: "link",
};

const getButton = (template = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: ButtonGoogle,
    [BUTTON_TYPE_CLASSES.inverted]: ButtonInverted,
    [BUTTON_TYPE_CLASSES.link]: LinkButton,
  }[template]);

const Button = ({ label, template, children, ...props }) => {
  const SelectedButton = getButton(template);
  return <SelectedButton {...props}>{children || label}</SelectedButton>;
};

export default Button;
