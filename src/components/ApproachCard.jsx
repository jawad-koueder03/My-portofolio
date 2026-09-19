import "./ApproachCard.css";

function ApproachCard({ number, title, description }) {
  return (
    <article className="approach-card">
      <span className="approach-card__number">{number}</span>
      <h3 className="approach-card__title">{title}</h3>
      <p className="approach-card__description">{description}</p>
    </article>
  );
}

export default ApproachCard;