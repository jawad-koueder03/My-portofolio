import "./Card.css";

function Card({
  children,
  className = "",
  variant = "default",
  hover = true,
  as: Component = "div",
  ...rest
}) {
  const classNames = [
    "card",
    `card--${variant}`,
    hover ? "card--hover" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component className={classNames} {...rest}>
      {children}
    </Component>
  );
}

export default Card;