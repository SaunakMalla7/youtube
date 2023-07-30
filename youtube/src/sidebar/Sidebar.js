import React from "react";
import "./sidebar.css";

function Sidebar() {
  return (
    <div className="side-bar">
      <div className="nav">
        <a href="/" className="nav-link active">
          <i className="material-icons">home</i>
          <span>Home</span>
        </a>
        <a href="/" className="nav-link">
          <i className="material-icons">local_fire_department</i>
          <span>Trending</span>
        </a>
        <a href="/" className="nav-link">
          <i className="material-icons">subscriptions</i>
          <span>Subscriptions</span>
        </a>
      </div>
      <hr></hr>
      <a href="/" className="nav-link">
        <i className="material-icons">library_add_check</i>
        <span>Library</span>
      </a>
      <a href="/" className="nav-link">
        <i className="material-icons">history</i>
        <span>History</span>
      </a>
      <a href="/" className="nav-link">
        <i className="material-icons">play_arrow</i>
        <span>Your Videos</span>
      </a>
      <a href="/" className="nav-link">
        <i className="material-icons">watch_later</i>
        <span>Watch Later</span>
      </a>
      <a href="/" className="nav-link">
        <i className="material-icons">thumb_up</i>
        <span>Liked Videos</span>
      </a>
    </div>
  );
}

export default Sidebar;
