import WindowHeader from "./WindowHeader";
import TopNavigation from "./TopNavigation";
import Sidebar from "./Sidebar";
import HeroBanner from "./HeroBanner";
import GameGrid from "./GameGrid";

export default function GameWindow() {
  return (
    <section className="game-window">
      <WindowHeader />
      <TopNavigation />

      <div className="window-body">
        <Sidebar />

        <main className="main-content">
          <HeroBanner />
          <GameGrid />
        </main>
      </div>
    </section>
  );
}
