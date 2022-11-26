import "./button.styles.scss";

const Button = ({ label, template, children, ...props }) => {
  return (
    <button className={`btn${template ? ` ${template}` : ""}`} {...props}>
      {children || label}
    </button>
  );
};

export default Button;
