import { FaBars, FaMagnifyingGlass, FaBell } from "react-icons/fa6";

export default function Header({ toggleSidebar }) {
  return (
    <header className="header">
      {/* Botão flutuante do sidebar */}
      <button
        className="sidebar-toggle"
        onClick={toggleSidebar}
        aria-label="Abrir menu"
      >
        <FaBars />
      </button>

      {/* Área esquerda */}
      <div className="header-left">
        <img
          src="/images/logo_mc.png"
          alt="Logo MC Móveis"
          className="logo"
        />

        <div className="search-bar">
          <FaMagnifyingGlass className="search-icon" />
          <input type="text" placeholder="Search..." />
        </div>
      </div>

      {/* Área direita */}
      <div className="header-right">
        <div className="user-info">
          <p><strong>MC Móveis</strong></p>
          <FaBell />
        </div>

        <div className="header-buttons">
          <button>New</button>
          <button>Upload</button>
          <button>Share</button>
        </div>
      </div>
    </header>
  );
}
