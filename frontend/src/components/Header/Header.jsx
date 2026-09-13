import React, { useState } from "react";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">

      <div className="header-left">

        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <div className="brand">
          <div className="brand-logo">
            AI
          </div>

          <div className="brand-text">
            <strong>Admin Panel</strong>
            <span>Management System</span>
          </div>
        </div>

      </div>


      <div className="header-right">

        <button className="notification-button">
          🔔
          <span className="notification-dot"></span>
        </button>

        <div className="profile">

          <div className="profile-avatar">
            A
          </div>

          <div className="profile-info">
            <strong>Admin</strong>
            <span>Administrator</span>
          </div>

          <button className="profile-arrow">
            ▼
          </button>

        </div>

      </div>

    </header>
  );
}

export default Header;