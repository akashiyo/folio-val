import GameWindow from "./components/GameWindow";
import "./components/styles.css";

export default function HomePage() {
  return (
    <main className="page-background">
      <GameWindow />
      <footer className="footer">
        <a className="footer-link" href="/demo">
          Demo components lab
        </a>
      </footer>
    </main>
    
  );
}
