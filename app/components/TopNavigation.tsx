export default function TopNavigation() {
  return (
    <nav className="top-navigation">
      <div className="top-navigation-left">
        <div className="riot-button">
          <span className="riot-icon">◆</span>
          <span>RIOT GAMES</span>
        </div>

        <button className="top-button active">GAMES</button>
        <button className="top-button">MARKET</button>
      </div>

      <div className="top-navigation-right">
        <button className="top-button light">SIGN IN</button>
        <button className="top-button light">SIGN UP</button>
        <span className="profile-circle">●</span>
      </div>
    </nav>
  );
}
