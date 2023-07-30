import React from 'react'
import "./header.css"
import logos from "../images/ytlogo.png"
function Header() {
  return (
    <div className='header'>
      <div className="logo left">
   <i id="menu" className="material-icons">menu</i>
   <img className='ytlogo' src={logos} alt='logo'/>
 </div>
 
 <div className="search center">
   <form action="">
     <input type="text" placeholder="Search" />
     <button><i className="material-icons">search</i></button>
   </form>
   <i className="material-icons mic">mic</i>
 </div>
 
 <div className="icons right">
   <i className="material-icons">videocam</i>
   <i className="material-icons">apps</i>
   <i className="material-icons">notifications</i>
   <i className="material-icons display-this">account_circle</i>
 </div>
    </div>
  )
}

export default Header