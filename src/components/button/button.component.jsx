import "./button.styles.scss";

const Button = ({ label, template, ...props }) => {
  return (
    <button className={`btn${template ? ` ${template}` : ""}`} {...props}>
      {label}
    </button>
  );
};

export default Button;
