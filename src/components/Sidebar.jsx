import {
  FaTableCellsLarge,
  FaUser,
  FaEnvelope,
  FaClockRotateLeft,
  FaListCheck,
  FaPeopleGroup,
  FaGear,
  FaCircleQuestion,
  FaShieldHalved
} from "react-icons/fa6"

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <FaTableCellsLarge />
        <h2>Dashboard</h2>
      </div>

      <nav className="sidebar-menu">
        <ul>
          <li><FaUser /> Profile</li>
          <li><FaEnvelope /> Messages</li>
          <li><FaClockRotateLeft /> History</li>
          <li><FaListCheck /> Tasks</li>
          <li><FaPeopleGroup /> Communities</li>
          <li><FaGear /> Settings</li>
          <li><FaCircleQuestion /> Support</li>
          <li><FaShieldHalved /> Privacy</li>
        </ul>
      </nav>
    </aside>
  )
}
