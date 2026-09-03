const menuItems = [
  { label: "Home", icon: "⌂", active: true },
  { label: "Discover", icon: "◈" },
  { label: "Collection", icon: "◇" },
  { label: "Battlepass", icon: "▣" },
  { label: "Store", icon: "◆" },
];

const secondaryItems = [
  { label: "Settings", icon: "⚙" },
  { label: "Support", icon: "?" },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <span className="sidebar-logo-symbol">V</span>
      </div>

      <div className="sidebar-group">
        {menuItems.map((item) => (
          <div
            className={`sidebar-item ${item.active ? "active" : ""}`}
            key={item.label}
          >
            <span className="sidebar-icon">{item.icon}</span>
            <span>{item.label}</span>
          </div>
        ))}
      </div>

      <div className="sidebar-separator" />

      <div className="sidebar-group">
        {secondaryItems.map((item) => (
          <div className="sidebar-item" key={item.label}>
            <span className="sidebar-icon">{item.icon}</span>
            <span>{item.label}</span>
          </div>
        ))}
      </div>

      <div className="sidebar-bottom">
        <div className="player-avatar">J</div>
        <div>
          <span className="player-name">PLAYER</span>
          <span className="player-status">ONLINE</span>
        </div>
      </div>
    </aside>
  );
}
