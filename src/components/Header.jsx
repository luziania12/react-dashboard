import { FaMagnifyingGlass, FaBell } from "react-icons/fa6"

export default function Header() {
  return (
    <header className="header">
      
      <div className="search-bar">
        <FaMagnifyingGlass />
        <input type="text" placeholder="Search..." />
      </div>

     
      <div className="user-info">
        <FaBell />
        <img src="../../public/images/logo_mc.png" alt="User avatar" />
        <p><strong>Marciel Silva</strong></p>
      </div>

     
      <div className="welcome">
        <img src="../../public/images/logo_mc.png" alt="User avatar" />
        <div>
          <p>Hi there,</p>
          <h2>MC Móveis (@mcmoveis)</h2>
        </div>
      </div>

      
      <div className="header-buttons">
        <button>New</button>
        <button>Upload</button>
        <button>Share</button>
      </div>
    </header>
  )
}
