import React from "react";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";

import "./App.css";

function App() {
  return (
    <div className="app">

      <Header />

      <div className="app-body">

        <Sidebar />

        <main className="main-content">
          <Dashboard />
        </main>

      </div>

    </div>
  );
}

export default App;