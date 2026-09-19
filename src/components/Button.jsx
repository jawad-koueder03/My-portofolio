import "./Button.css";

function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  icon,
  iconPosition = "right",
  type = "button",
  ...rest
}) {
  // تحديد العنصر: <a> إذا كان هناك href، وإلا <button>
  const Component = href ? "a" : "button";

  // خصائص إضافية حسب نوع العنصر
  const elementProps = href
    ? { href }
    : { type, onClick };

  // بناء أسماء الـ classes
  const classNames = [
    "btn",
    `btn--${variant}`,
    `btn--${size}`,
  ].join(" ");

  return (
    <Component className={classNames} {...elementProps} {...rest}>
      {/* أيقونة على اليسار */}
      {icon && iconPosition === "left" && (
        <span className="btn__icon btn__icon--left" aria-hidden="true">
          {icon}
        </span>
      )}

      {/* النص */}
      <span className="btn__label">{children}</span>

      {/* أيقونة على اليمين */}
      {icon && iconPosition === "right" && (
        <span className="btn__icon btn__icon--right" aria-hidden="true">
          {icon}
        </span>
      )}
    </Component>
  );
}

export default Button;