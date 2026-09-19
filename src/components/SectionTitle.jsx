import "./SectionTitle.css";

function SectionTitle({
  label,
  title,
  subtitle,
  align = "left",
  layout = "inline",
  className = "",
}) {
  const classNames = [
    "section-title",
    `section-title--align-${align}`,
    `section-title--layout-${layout}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classNames}>
      {/* ===== الجانب الأيسر: Label + Title ===== */}
      <div className="section-title__main">
        {label && (
          <span className="section-title__label">
            <span className="section-title__label-line" aria-hidden="true" />
            {label}
          </span>
        )}

        {title && (
          <h2 className="section-title__title">{title}</h2>
        )}
      </div>

      {/* ===== الجانب الأيمن: Subtitle ===== */}
      {subtitle && (
        <p className="section-title__subtitle">{subtitle}</p>
      )}
    </div>
  );
}

export default SectionTitle;