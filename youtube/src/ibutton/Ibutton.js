import "./ibutton.css";
import PlaylistScreen from "../playscreen/PlaylistScreen";

function Ibutton({ isOpen, toggleSidebar }) {
  return (
    <>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <nav className="nav">
          <ui>
            <li>
              <div className="links">
                <PlaylistScreen />
              </div>
            </li>
          </ui>
        </nav>
        <button className="ibutton" onClick={toggleSidebar}>i</button>
      </div>
    </>
  );
}

export default Ibutton;
