import "./button.styles.scss";

const Button = ({ label, template, ...props }) => {
  return (
    <button className={`btn${template ? ` ${template}` : ""}`}>{label}</button>
  );
};

export default Button;
