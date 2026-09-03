interface GameCardProps {
  title: string;
  button: string;
  className: string;
  character: string;
}

export default function GameCard({
  title,
  button,
  className,
  character,
}: GameCardProps) {
  return (
    <article className={`game-card ${className}`}>
      <div className="game-card-content">
        <h2>{title}</h2>

        <button className="card-button">{button}</button>
      </div>

      <div className="card-character">
        {character}
      </div>

      <div className="card-angle" />
    </article>
  );
}
