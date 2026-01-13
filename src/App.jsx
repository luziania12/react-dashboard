import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
// Pages

import History from "./components/pages/History";
import Tasks from "./components/pages/Tasks";
import Communities from "./components/pages/Communities";
import Settings from "./components/pages/Settings";
import Support from "./components/pages/Support";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };

  return (
    <div className={`layout ${sidebarOpen ? "sidebar-open" : ""}`}>
      
      {/* HEADER */}
      <Header toggleSidebar={toggleSidebar} />

      {/* SIDEBAR */}
      <Sidebar isOpen={sidebarOpen} />

      {/* CONTEÚDO PRINCIPAL */}
      <main className="content">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/history" element={<History />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/communities" element={<Communities />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </main>

    </div>
  );
}
