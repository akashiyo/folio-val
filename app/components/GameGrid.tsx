import GameCard from "./GameCard";

const games = [
  {
    title: "EXCLUSIVE GAMES",
    button: "PLAY VALORANT",
    className: "card-blue",
    character: "AGENT 01",
  },
  {
    title: "EXCLUSIVE GAMES",
    button: "PLAY NOW",
    className: "card-green",
    character: "AGENT 02",
  },
  {
    title: "EXCLUSIVE GAMES",
    button: "PLAY NOW",
    className: "card-purple",
    character: "AGENT 03",
  },
  {
    title: "EXCLUSIVE GAMES",
    button: "PLAY NOW",
    className: "card-violet",
    character: "AGENT 04",
  },
];

export default function GameGrid() {
  return (
    <section className="game-grid">
      {games.map((game) => (
        <GameCard
          key={`${game.className}-${game.character}`}
          title={game.title}
          button={game.button}
          className={game.className}
          character={game.character}
        />
      ))}
    </section>
  );
}
