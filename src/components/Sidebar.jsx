import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaHistory,
  FaTasks,
  FaUsers,
  FaCog,
  FaLifeRing
} from "react-icons/fa";

export default function Sidebar({ isOpen }) {
  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <h2 className="sidebar-header">Menu</h2>

      <ul className="sidebar-menu">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "rect-holder active" : "rect-holder"
            }
          >
            <FaHome />
            <span>Início</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/history"
            className={({ isActive }) =>
              isActive ? "rect-holder active" : "rect-holder"
            }
          >
            <FaHistory />
            <span>História</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/tasks"
            className={({ isActive }) =>
              isActive ? "rect-holder active" : "rect-holder"
            }
          >
            <FaTasks />
            <span>Tarefas</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/communities"
            className={({ isActive }) =>
              isActive ? "rect-holder active" : "rect-holder"
            }
          >
            <FaUsers />
            <span>Comunidades</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              isActive ? "rect-holder active" : "rect-holder"
            }
          >
            <FaCog />
            <span>Configurações</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/support"
            className={({ isActive }) =>
              isActive ? "rect-holder active" : "rect-holder"
            }
          >
            <FaLifeRing />
            <span>Suporte</span>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}
