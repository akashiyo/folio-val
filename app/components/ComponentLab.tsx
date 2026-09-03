"use client";

import { useMemo, useState } from "react";
import "./component-lab.css";

type Category = "Navigation" | "Buttons" | "Cards" | "Form" | "Feedback";

type ComponentItem = {
  id: string;
  name: string;
  category: Category;
  description: string;
};

const components: ComponentItem[] = [
  {
    id: "top-navigation",
    name: "Top Navigation",
    category: "Navigation",
    description: "Barre de navigation principale de l'application.",
  },
  {
    id: "sidebar-item",
    name: "Sidebar Item",
    category: "Navigation",
    description: "Élément de menu latéral avec état actif.",
  },
  {
    id: "primary-button",
    name: "Primary Button",
    category: "Buttons",
    description: "Bouton principal utilisé pour les actions importantes.",
  },
  {
    id: "secondary-button",
    name: "Secondary Button",
    category: "Buttons",
    description: "Bouton secondaire plus discret.",
  },
  {
    id: "game-card",
    name: "Game Card",
    category: "Cards",
    description: "Carte promotionnelle pour un jeu ou un produit.",
  },
  {
    id: "input",
    name: "Input",
    category: "Form",
    description: "Champ de saisie avec différents états.",
  },
  {
    id: "badge",
    name: "Status Badge",
    category: "Feedback",
    description: "Indicateur compact d'état.",
  },
];

const categories: Category[] = [
  "Navigation",
  "Buttons",
  "Cards",
  "Form",
  "Feedback",
];

function PrimaryButton({
  label,
  size,
  color,
  radius,
}: {
  label: string;
  size: string;
  color: string;
  radius: string;
}) {
  return (
    <button
      className={`demo-button ${size}`}
      style={{
        backgroundColor: color,
        borderRadius: `${radius}px`,
      }}
    >
      {label}
    </button>
  );
}

function SecondaryButton({
  label,
  size,
  radius,
}: {
  label: string;
  size: string;
  radius: string;
}) {
  return (
    <button
      className={`demo-button secondary ${size}`}
      style={{
        borderRadius: `${radius}px`,
      }}
    >
      {label}
    </button>
  );
}

function TopNavigationDemo() {
  return (
    <div className="demo-top-navigation">
      <div className="demo-logo">
        <span>V</span>
        <strong>VALORANT</strong>
      </div>

      <div className="demo-nav-links">
        <span className="selected">Games</span>
        <span>Market</span>
        <span>News</span>
      </div>

      <div className="demo-nav-actions">
        <button className="demo-nav-button">SIGN IN</button>
        <div className="demo-avatar">P</div>
      </div>
    </div>
  );
}

function SidebarItemDemo({
  label,
  active,
  compact,
}: {
  label: string;
  active: boolean;
  compact: boolean;
}) {
  return (
    <div className={`demo-sidebar-item ${active ? "active" : ""}`}>
      <span className="demo-sidebar-icon">◈</span>
      {!compact && <span>{label}</span>}
    </div>
  );
}

function GameCardDemo({
  title,
  color,
  accent,
  radius,
}: {
  title: string;
  color: string;
  accent: string;
  radius: string;
}) {
  return (
    <div
      className="demo-game-card"
      style={{
        backgroundColor: color,
        borderRadius: `${radius}px`,
      }}
    >
      <div className="demo-card-copy">
        <small>EXCLUSIVE</small>
        <h3>{title}</h3>
        <button
          className="demo-card-button"
          style={{ backgroundColor: accent }}
        >
          PLAY NOW
        </button>
      </div>

      <div className="demo-card-figure">AGENT</div>
    </div>
  );
}

function InputDemo({
  placeholder,
  focus,
}: {
  placeholder: string;
  focus: boolean;
}) {
  return (
    <div className={`demo-input-wrapper ${focus ? "focus" : ""}`}>
      <label>PLAYER NAME</label>
      <input placeholder={placeholder} />
    </div>
  );
}

function BadgeDemo({
  label,
  status,
}: {
  label: string;
  status: "online" | "warning" | "offline";
}) {
  return (
    <span className={`demo-badge ${status}`}>
      <span />
      {label}
    </span>
  );
}

export default function ComponentLab() {
  const [selectedId, setSelectedId] = useState("primary-button");
  const [query, setQuery] = useState("");

  const [label, setLabel] = useState("SIGN UP NOW");
  const [buttonColor, setButtonColor] = useState("#ff4655");
  const [buttonSize, setButtonSize] = useState("medium");
  const [radius, setRadius] = useState("2");

  const [cardColor, setCardColor] = useState("#203447");
  const [cardAccent, setCardAccent] = useState("#f5f5f0");
  const [cardTitle, setCardTitle] = useState("VALORANT");

  const [inputPlaceholder, setInputPlaceholder] =
    useState("Enter your player name");
  const [inputFocus, setInputFocus] = useState(false);

  const filteredComponents = useMemo(() => {
    return components.filter((component) =>
      component.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  const selectedComponent =
    components.find((component) => component.id === selectedId) ??
    components[0];

  function renderPreview() {
    switch (selectedComponent.id) {
      case "top-navigation":
        return <TopNavigationDemo />;

      case "sidebar-item":
        return (
          <div className="demo-sidebar-preview">
            <SidebarItemDemo label="Home" active compact={false} />
            <SidebarItemDemo label="Collection" active={false} compact={false} />
            <SidebarItemDemo label="Store" active={false} compact={false} />
          </div>
        );

      case "primary-button":
        return (
          <PrimaryButton
            label={label}
            color={buttonColor}
            size={buttonSize}
            radius={radius}
          />
        );

      case "secondary-button":
        return (
          <SecondaryButton
            label={label}
            size={buttonSize}
            radius={radius}
          />
        );

      case "game-card":
        return (
          <GameCardDemo
            title={cardTitle}
            color={cardColor}
            accent={cardAccent}
            radius={radius}
          />
        );

      case "input":
        return (
          <InputDemo
            placeholder={inputPlaceholder}
            focus={inputFocus}
          />
        );

      case "badge":
        return <BadgeDemo label="ONLINE" status="online" />;

      default:
        return null;
    }
  }

  function renderControls() {
    if (
      selectedComponent.id === "primary-button" ||
      selectedComponent.id === "secondary-button"
    ) {
      return (
        <>
          <ControlText
            label="Label"
            value={label}
            onChange={setLabel}
          />

          <ControlSelect
            label="Size"
            value={buttonSize}
            onChange={setButtonSize}
            options={["small", "medium", "large"]}
          />

          {selectedComponent.id === "primary-button" && (
            <ControlColor
              label="Background"
              value={buttonColor}
              onChange={setButtonColor}
            />
          )}

          <ControlRange
            label="Border radius"
            value={radius}
            onChange={setRadius}
            min="0"
            max="24"
          />
        </>
      );
    }

    if (selectedComponent.id === "game-card") {
      return (
        <>
          <ControlText
            label="Title"
            value={cardTitle}
            onChange={setCardTitle}
          />

          <ControlColor
            label="Background"
            value={cardColor}
            onChange={setCardColor}
          />

          <ControlColor
            label="Button color"
            value={cardAccent}
            onChange={setCardAccent}
          />

          <ControlRange
            label="Border radius"
            value={radius}
            onChange={setRadius}
            min="0"
            max="24"
          />
        </>
      );
    }

    if (selectedComponent.id === "input") {
      return (
        <>
          <ControlText
            label="Placeholder"
            value={inputPlaceholder}
            onChange={setInputPlaceholder}
          />

          <label className="control-checkbox">
            <input
              type="checkbox"
              checked={inputFocus}
              onChange={(event) => setInputFocus(event.target.checked)}
            />
            Simuler l&apos;état focus
          </label>
        </>
      );
    }

    return (
      <p className="empty-controls">
        Ce composant ne possède pas encore de propriétés éditables.
      </p>
    );
  }

  return (
    <main className="component-lab">
      <header className="lab-header">
        <div>
          <span className="lab-eyebrow">DESIGN SYSTEM</span>
          <h1>Component Lab</h1>
          <p>Prévisualisez les composants individuellement.</p>
        </div>

        <div className="lab-header-status">
          <span className="status-dot" />
          Local preview
        </div>
      </header>

      <div className="lab-layout">
        <aside className="component-sidebar">
          <div className="search-box">
            <span>⌕</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Rechercher..."
            />
          </div>

          <div className="component-list">
            {categories.map((category) => {
              const categoryComponents = filteredComponents.filter(
                (component) => component.category === category
              );

              if (!categoryComponents.length) return null;

              return (
                <section key={category} className="component-category">
                  <h2>{category}</h2>

                  {categoryComponents.map((component) => (
                    <button
                      key={component.id}
                      className={`component-list-item ${
                        selectedId === component.id ? "selected" : ""
                      }`}
                      onClick={() => setSelectedId(component.id)}
                    >
                      <span className="component-list-icon">◆</span>
                      <span>{component.name}</span>
                    </button>
                  ))}
                </section>
              );
            })}
          </div>
        </aside>

        <section className="lab-workspace">
          <div className="workspace-toolbar">
            <div>
              <span className="breadcrumb">
                {selectedComponent.category}
              </span>
              <h2>{selectedComponent.name}</h2>
            </div>

            <div className="workspace-actions">
              <button>Desktop</button>
              <button>100%</button>
            </div>
          </div>

          <div className="preview-area">
            <div className="preview-grid" />
            <div className="preview-component">
              {renderPreview()}
            </div>
          </div>

          <div className="component-description">
            <h3>Description</h3>
            <p>{selectedComponent.description}</p>
          </div>
        </section>

        <aside className="properties-panel">
          <div className="properties-header">
            <span>PROPERTIES</span>
            <span className="properties-icon">⚙</span>
          </div>

          <div className="properties-content">{renderControls()}</div>
        </aside>
      </div>
    </main>
  );
}

/* Controls */

function ControlText({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="control-group">
      <span>{label}</span>
      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}

function ControlColor({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="control-group">
      <span>{label}</span>
      <div className="color-control">
        <input
          type="color"
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
        <code>{value}</code>
      </div>
    </label>
  );
}

function ControlSelect({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}) {
  return (
    <label className="control-group">
      <span>{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}

function ControlRange({
  label,
  value,
  onChange,
  min,
  max,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  min: string;
  max: string;
}) {
  return (
    <label className="control-group">
      <div className="range-label">
        <span>{label}</span>
        <code>{value}px</code>
      </div>

      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}
