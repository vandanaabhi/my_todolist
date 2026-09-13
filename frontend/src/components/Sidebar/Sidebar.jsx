import React from "react";
import "./Sidebar.css";

function Sidebar() {

  const menuItems = [
    {
      icon: "⌂",
      label: "Dashboard",
      active: true
    },
    {
      icon: "◉",
      label: "Users"
    },
    {
      icon: "▣",
      label: "Projects"
    },
    {
      icon: "▤",
      label: "Reports"
    },
    {
      icon: "⚙",
      label: "Settings"
    }
  ];

  return (
    <aside className="sidebar">

      <div className="sidebar-title">
        MENU
      </div>

      <nav className="sidebar-menu">

        {menuItems.map((item) => (
          <a
            href="#"
            key={item.label}
            className={`sidebar-item ${
              item.active ? "active" : ""
            }`}
          >

            <span className="sidebar-icon">
              {item.icon}
            </span>

            <span>
              {item.label}
            </span>

          </a>
        ))}

      </nav>


      <div className="sidebar-bottom">

        <div className="sidebar-help">

          <div className="help-icon">
            ?
          </div>

          <div>
            <strong>Need Help?</strong>
            <span>Contact support</span>
          </div>

        </div>

      </div>

    </aside>
  );
}

export default Sidebar;