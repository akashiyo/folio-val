export default function WindowHeader() {
  return (
    <header className="window-header">
      <div className="window-brand">
        <span className="brand-mark">VALORANT</span>
        <span className="brand-game">GAME</span>
      </div>

      <div className="window-tabs">
        <span className="window-tab">ACC</span>
        <span className="window-tab active">ACT</span>
      </div>

      <div className="window-controls">
        <button aria-label="Réduire">−</button>
        <button aria-label="Agrandir">□</button>
        <button aria-label="Fermer">×</button>
      </div>
    </header>
  );
}
