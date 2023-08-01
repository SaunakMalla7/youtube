import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Ibutton from '../ibutton/Ibutton'
import PlaylistScreen from '../playscreen/PlaylistScreen';
import "./player.css"

function Player() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };
  return (
    <div className="player">
          <div className="col">
            <div className="embed-responsive embed-responsive-16by9">
              <div className="ratio ratio-16x9">
                <div className="background">
                  <button onClick={toggleSidebar}>i</button>
                  <Ibutton className="ibutton" isOpen={isOpen} toggleSidebar={toggleSidebar} />         
                </div>
              </div>
          </div>
        </div>
        <div>
            <PlaylistScreen/>
        </div>
      </div>
  )
}

export default Player