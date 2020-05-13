import React from 'react'
import {Link} from 'react-router-dom'
import "../css/nav_bar.css"

export default function nav_bar(props) {
   return (
      <div className = "nav-bar">
         <div className = "left-side">
            <div class="nav-link active-nav-link">
               <Link to = "/" >{props.button1}</Link>
            </div>

            <div class="nav-link">
               <Link to = "/" >{props.button2}</Link>
            </div>
         </div>

         <div class="right-side">
            <div class="name">
               <div>{props.name}</div>
            </div>
         </div>
      </div>
   )
}
